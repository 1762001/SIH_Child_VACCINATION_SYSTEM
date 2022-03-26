const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Dose = require("../models/dose");
const { body, validationResult } = require("express-validator");

router.get("/fetchallvaccine", fetchuser, async (req, res) => {
  //  here we are fetching notes of the user
  try {
    const dose = await Dose.find({ user: req.user.id });
    res.json(dose);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Enternal Server Error");
  }
});

router.post(
  "/createdose",
  fetchuser,
  // feching Vaccine data and adding restriction
  [
    body("vaccinename", "Enter a valid name").isLength({ min: 2}),
    body("quantity"),
  ],
  async (req, res) => {
    try {
      const { vaccinename, quantity } = req.body;
      //   here we are checking if the notes doesn't have these errors then we add else we throw error
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      // Here we are taking title decription by creating a Vaccine object
      const vac = new Vaccine({
        vaccinename,
        quantity,
        user: req.user.id,
      });
      const savedvac = await vac.save();

      res.json(savedvac);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Enternal Server Error");
    }
  }
);

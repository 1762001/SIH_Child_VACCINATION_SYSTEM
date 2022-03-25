const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Vaccine = require("../models/Vaccine");
const { body, validationResult } = require("express-validator");

// Route 1
//  this is used to fetch all notes of those user which are already login
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  //  here we are fetching notes of the user
  try {
    const vacs = await Vaccine.find({ user: req.user.id });
    res.json(vacs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Enternal Server Error");
  }
});

// Route 2:
// Thi s is a route of adding notes
// using POST "/api/notes/addnote"
router.post(
  "/createvaccine",
  fetchuser,
  // feching Vaccine data and adding restriction
  [
    body("vaccinename", "Enter a valid name").isLength({ min: 3 }),
    body("notifications_sent", "notification failed")
  ],
  async (req, res) => {
    try {
      const { vaccinename, notifications_sent } = req.body;
      //   here we are checking if the notes doesn't have these errors then we add else we throw error
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      // Here we are taking title decription by creating a Vaccine object
      const vac = new Vaccine({
       vaccinename,
       notifications_sent,
       user:req.user.id
      });
      const savedvac = await vac.save();

      res.json(savedvac);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Enternal Server Error");
    }
  }
);

// Route 3:
// Update an exsisting Note
// Put "/api/Vaccine/updatenote" Login required

router.put("/updatenote/:id", fetchuser, async (req, res) => {
  try {
    const { name, notifications_sent } = req.body;
    // Create a newvac Object
    const newvac = {};
    if (name) {
      newvac.name = name;
    }
    if (notifications_sent) {
      newvac.notifications_sent = notifications_sent;
    }
   
    // here new note object has been built
    // find the note to be updated or update it

    let vac = await Vaccine.findById(req.params.id);

    // if note is present or not then we use this check
    if (!vac) {
      return res.status(404).send("Not Found");
    }
    //  if some one else want to access then we use this check
    if (vac.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }
    vac = await Vaccine.findByIdAndUpdate(
      req.params.id,
      { $set: newvac },
      { new: true }
    );
    res.json({ vac });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Enternal Server Error");
  }
});




module.exports = router;
const express = require("express");
const Donation = require("../models/Donation");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const donateController = require("../middleware/donate");

router.post("/createdonation", 
    [
        body("DonatorName", "Enter a valid name").isLength({ min: 3 }),
        body("Phone", "Enter a valid number").isLength({ min: 10 }),
        body("amount", "Enter a valid amount"),
    ],
    async (req,res)=>{
        try {
            const {DonatorName ,Phone, amount} = req.body;
            const error = validationResult(req);
            if(!error.isEmpty()){
                return res.status(400).json({errors: errors.array()});

            }
            const donation= new Donation({
                DonatorName,
                Phone,
                amount
            });
            const savedDonation= await donation.save();
            res.json(savedDonation);

        }catch (error){
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }

);

module.exports = router;

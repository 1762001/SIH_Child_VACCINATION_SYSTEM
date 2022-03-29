const express = require("express");
const Child = require("../models/Child");
const router = express.Router();
const {body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = "Thisisagoodboy";


// Create a user 

router.post(
    "/createchild",
    [
        body("email", "Enter a valid email").isEmail(),
        body("name", "Enter a valid name"),
        body("password").isLength({ min: 5 }),
        body("address").isLength({min: 3}),
        body("city").isLength({ min: 3 }),
        body("pincode").isLength({ min: 6 }),
        body("dob").isDate({min:0}),
        body("phone","Enter a valid number").isLength({min:10}),
        body("gender"),
        body("birth_hospital")
    ],
    async (req, res) => {
        let success = false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success,errors: errors.array() });
        }

        try{
            let user = await Child.findOne({email: req.body.email });
            if(user){
                return res
                .status(400)
                .json({success , error: "Sorry a user with this email already exists"});

            }

            const salt = await bcrypt.genSalt(10);

            const secPass = await bcrypt.hash(req.body.password,salt);

            user = await Child.create({
               
                email: req.body.email,
                name: req.body.name,
                password: secPass,
                address: req.body.address,
                city: req.body.city,
                pincode: req.body.pincode,
                dob:req.body.dob,
                phone:req.body.phone,
                gender:req.body.gender,
                birth_hospital:req.body.birth_hospital,
            });

            const data = {
                user: {
                    id: user.id,

                },
            }
            const authtoken = jwt.sign(data, JWT_SECRET);

            success = true;
            res.json({success, authtoken });

        }catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server Error");
        }
    }
)

//Login of the hospitals

router.post(
    "/login",
    [
        body("email","Enter a valid email").isEmail(),
        body("password","password  cannot be blank").exists(),
    ],
    async (req, res) =>{
        let success =false;
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({success, errors: errors.array() });

        }
        const { email, password} = req.body;
        try{
            let user = await Child.findOne({ email });
            if(!user) {
                return res
                .status(400)
                .json({ success,error: "Please try to login with correct credentials"} );

            }
            const passwordCompare = await bcrypt.compare(password, user.password);
            if(!passwordCompare){
                return res(400)
                    .status(400)
                    .json({success, error:"Please try to login with correct credentials"})

            }

            const data = {
                user : {
                    id: user.id,

                },

            };
            const authtoken =jwt.sign(data, JWT_SECRET);
            success = true;
            res.json({success , authtoken});

        }catch (error){
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
);
router.post("/getchild",fetchuser, async (req, res) => {
    try {
      //  here we are taking user id as to find the the user by its user id
      var userId = req.user.id;
      const user = await Child.findById(userId).select("-password");
      res.send(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Enternal Server Error");
    }
});
module.exports = router;
const donate= require('../models/Donation')
module.exports.create = function(req,res){
    donate.create({
        DonatorName: req.body.name,
        Phone:req.body.phone,
        amount: req.body.amount
        
    }),function(err, donation){
        if(err){console.log("error in donating");return};
        return res.json('back');
    }
}

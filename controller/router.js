const easyinvoice = require("easyinvoice");
const express = require("express");
const router = express.Router();
const Bills = require("../model/billing")
const url = require('url'); 



router.get('/',(req,res)=>{
    res.render('index');
})

router.get('/print',(req,res)=> { 
   
   let billing = req.query;
   console.log(billing);
   res.render("print",{billing:req.query});
})

router.post('/submit', (req,res)=>{
 
    Bills(req.body).save();
    res.redirect(url.format({
       pathname:"/print",
       query:req.body,
     }))
});

module.exports = router;
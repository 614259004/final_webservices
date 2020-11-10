const express = require('express');
const router = express.Router();
const myData = require('../topTenRecovered');
const Coviddata = require('../coviddata');

router.get('/',(req,res)=>{
    res.render('index',{Coviddata});
});



module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json(req.session);
})

router.get("/secretclub",(req,res)=>{
    if(req.session.user){
        res.send(`welcome to the secret club, ${req.session.user.username}!`)
    } else{
        res.status(401).send("login first to see the secret club")
    }
})

module.exports = router;
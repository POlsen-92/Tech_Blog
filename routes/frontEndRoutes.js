const express = require('express');
const router = express.Router();
const { Blog,Category,User } = require('../models');

router.get("/",(req,res)=>{
    Blog.findAll({
        order:["UserId"],
        include:[User, Category]
    }).then(blogData=>{

        const hbsblogs = blogData.map(blog=>blog.get({plain:true}))
        // res.json(hbsblogs)
        res.render("home",{
            blogs:hbsblogs
        })
    })
})

router.get("/profile",(req,res)=>{
    if(!req.session.user){
        return res.status(401).send("Sign In first!")
    }
    User.findByPk(req.session.user.id,{
        include:[Blog]
    }).then(userData=>{
        const hbsUser = userData.get({plain:true});
        res.render("profile",hbsUser)
    })
})

router.get("/signin",(req,res)=>{
    res.render("signin")
})

module.exports = router;
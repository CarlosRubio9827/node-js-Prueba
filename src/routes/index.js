const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.render("index", {title: "First Web Site"});
});

router.get("/about", function(req, res){
    res.render("about", {title: "Page About"});
});

router.get("/contact", function(req, res){
    res.render("contact",{title : "Página de contacto"});
});

module.exports = router;
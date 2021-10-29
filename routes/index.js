const express = require('express');
const router = express.Router();


// http://localhost:3000/

const frontEndRoutes = require("./frontEndRoutes.js");
router.use(frontEndRoutes);
const apiRoutes = require("./api");
router.use("/api",apiRoutes);
const sessionRoutes = require("./sessionsRoutes")
router.use("/sessions",sessionRoutes)

module.exports = router;
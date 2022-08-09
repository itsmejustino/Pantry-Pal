const router = require("express").Router();

const apiRoute = require("./api");
const homeRoute = require("./homeRoutes");
const signupRoute = require("./signupRoute.js");

// const profileRoute = require("./api/userprofile");

router.use("/", homeRoute);
router.use("/api", apiRoute);
router.use("/signup", signupRoute);

// router.use("/userprofile", profileRoute);

module.exports = router;

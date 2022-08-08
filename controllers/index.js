const router = require("express").Router();

const apiRoute = require("./api");
const homeRoute = require("./api/userLoginRoute");
// const profileRoute = require("./api/userprofile");

router.use("/", homeRoute);
router.use("/api", apiRoute);
// router.use("/userprofile", profileRoute);

module.exports = router;

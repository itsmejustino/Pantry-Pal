const router = require("express").Router();

const apiRoute = require("./api");
<<<<<<< HEAD
const homeRoute = require("./homeRoutes");
const signupRoute = require("./signupRoute.js");

=======
const homeRoute = require("./api/userLoginRoute");
>>>>>>> 04b5f18acb831cbcee4faf010ee853c3fd2c69b9
// const profileRoute = require("./api/userprofile");

router.use("/", homeRoute);
router.use("/api", apiRoute);
router.use("/signup", signupRoute);

// router.use("/userprofile", profileRoute);

module.exports = router;

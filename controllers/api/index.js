const router = require("express").Router();
const userRoutes = require("./userLoginRoute");
const signupRoute = require("./signupRoute");

router.use("/users", userRoutes);
router.use("/signup", signupRoute);

module.exports = router;

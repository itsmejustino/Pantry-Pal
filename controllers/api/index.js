const router = require("express").Router();
const userRoutes = require("./userLoginRoute");
const apiRoutes = require("./apiRoute");
const signupRoute = require("./signupRoute");
const ingredientRoutes = require("./ingredientRoute");

router.use("/signup", signupRoute);

router.use("/users", userRoutes);
router.use("/ingredients", ingredientRoutes);
router.use("/apiRoutes", apiRoutes);

module.exports = router;

const router = require("express").Router();
const userRoutes = require("./userLoginRoute");
<<<<<<< HEAD
const signupRoute = require("./signupRoute");

router.use("/users", userRoutes);
router.use("/signup", signupRoute);
=======
const ingredientRoutes = require("./ingredientRoute");
const apiRoutes = require("./apiRoute");

router.use("/users", userRoutes);
router.use("/ingredients", ingredientRoutes);
router.use("/apiRoutes", apiRoutes);

>>>>>>> 04b5f18acb831cbcee4faf010ee853c3fd2c69b9

module.exports = router;

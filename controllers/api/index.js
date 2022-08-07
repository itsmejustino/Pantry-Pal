const router = require("express").Router();
const userRoutes = require("./userLoginRoute");
const ingredientRoutes = require("./ingredientRoute");

router.use("/users", userRoutes);
router.use("/ingredients", ingredientRoutes);

module.exports = router;

const router = require("express").Router();
const userRoutes = require("./userLoginRoute");
const ingredientRoutes = require("./ingredientRoute");
const apiRoutes = require("./apiRoute");

router.use("/users", userRoutes);
router.use("/ingredients", ingredientRoutes);
router.use("/apiRoutes", apiRoutes);


module.exports = router;

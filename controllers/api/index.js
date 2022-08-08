const router = require("express").Router();
const userRoutes = require("./userLoginRoute");

router.use("/users", userRoutes);

module.exports = router;

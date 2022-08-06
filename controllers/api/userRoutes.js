const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../../models/User");

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res.status(404).json({ message: "Incorrect email or password" });
      return;
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect email or password" });
      return;
    }

    res.status(200).json({ message: "Logged In" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const userLoginData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userLoginData.id;
      req.session.logged_in = true;

      res.status(200).json(userLoginData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userLoginData = await User.findOne({
      where: { email: req.body.email },
    });

    if (!userLoginData) {
      res
        .status(400)
        .json({ message: "Wrong email or password, please try again" });
      return;
    }

    const validatePassword = await userLoginData.checkPassword(
      req.body.password
    );

    if (!validatePassword) {
      res
        .status(400)
        .json({ message: "Wrong email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userLoginData.id;
      req.session.logged_in = true;

      res.json({ user: userLoginData, message: "Logged in successfully!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

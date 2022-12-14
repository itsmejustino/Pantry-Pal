const router = require("express").Router();
const { User } = require("../../models");
const bcrypt = require("bcrypt");

// method to create a new user
// router.post("/", async (req, res) => {
//   try {
//     const newUser = req.body;
//     newUser.password = await bcrypt.hash(req.body.password, 10);
//     const userData = await User.create(newUser);
//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

var express = require("express");
var router = express.Router();
let User = require("../Schema/User");

router.post("/register", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user)
      return res.status(400).json("User with Given Email Already Exist ");

    user = new User();
    user.name = req.body.firstname;
    user.email = req.body.email;
    user.pic = req.body.pic;
    user.password = req.body.password;

    let accessToken = user.generateToken(); //----->Genrate Token
    let datatoreturn = {
      id: user._id,
      accessToken: accessToken,
      pic: user.pic,
    };
    await user.save();
    res.send(datatoreturn);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;

const router = require("express").Router();

const User = require("../models/Users");

// Register
router.post("/register", async(req, res) => {
    // crete a new user
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    // saving user
    try {
        const user = await newUser.save();
        res.status("200").json(user);
    } catch (error) {
        res.status(500).json(err);
    }
});

//Login
router.post("/login", async(req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("user not found");

        const validPassword = await User.findOne({
            password: req.body.password,
        });
        !validPassword && res.status(404).json("Incorrect password");

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
        return res.status(400).json({ message: "User not found" });
    }

    const correctPassword = await bcrypt.compare(req.body.password, user.password);

    if (!correctPassword) {
        return res.status(400).json({ message: "Invalid password" });
    }

    const usertoken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY, { expiresIn: "2h" });

    res.cookie("usertoken", usertoken, { httpOnly: true, maxAge: 1000 * 60 * 60 * 2 }).json({msg: "success!", user: user});
}

module.exports.register = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        const userToken = jwt.sign({
            id: newUser._id
        }, process.env.SECRET_KEY, { expiresIn: "2h" });

        res.cookie("usertoken", userToken, { httpOnly: true, maxAge: 1000 * 60 * 60 * 2 }).json({msg: "success!", user: newUser});
    }
    catch (err) {
        res.status(400).json(err)
    }
}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken').sendStatus(200).json({ message: "Successfully logged out!" });
}
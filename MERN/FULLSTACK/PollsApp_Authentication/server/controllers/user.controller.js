const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
secret_key = 'sssddsfdssdfdsf';

module.exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
        return res.status(400).json({ message: "User not found" });
    }

    const correctPassword = await bcrypt.compare(req.body.password, user.password);

    if (!correctPassword) {
        return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({
        id: user._id
    }, secret_key, { expiresIn: "2h" });
    // }, process.env.SECRET_KEY, { expiresIn: "2h" });

    res.cookie("token", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 2 })
    return res.json({msg: "success!", user: user, token: token});
}

module.exports.register = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        const token = jwt.sign({
            id: newUser._id
        }, secret_key, { expiresIn: "2h" });

        res.cookie("token", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 2 })
        return res.json({msg: "success!", user: newUser, token: token});
    }
    catch (err) {
        res.status(400).json(err)
    }
}

module.exports.logout = (req, res) => {
    res.clearCookie('token').sendStatus(200)
    return res.json({ message: "Successfully logged out!" });
}
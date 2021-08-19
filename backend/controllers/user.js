const User = require("../models/user");
const bcrypt = require("bcrypt");

const create = async(req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password)
        return res.status(401).send("process failed: Incomplete data");

    let existingUser = await User.findOne({ email: req.body.email });
    if (existingUser)
        return res
            .status(400)
            .send("Process failed: user email is already registered");
    let hash = '';
    try {
        hash = await bcrypt.hash(req.body.password, 10);
    } catch (error) {
        console.log("Password invalid", error);
        return res.status(400).send("Process failed: password not valid");
    }
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        dbStatus: true,
    });

    let result = await user.save();
    if (!result) return res.status(400).send("Failed to register user");

    try {
        let jwt = user.generateJWT();
        return res.status(200).send({ jwt });
    } catch (e) {
        return res.status(400).send("Failed to register user");
    }
};

const list = async(req, res) => {
    let user = await User.find().exec();
    if (!user || user.length === 0) return res.status(400).send("No users found");
    return res.status(200).send({ user });
};

module.exports = { create, list };
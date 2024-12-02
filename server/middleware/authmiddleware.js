const jwt = require("jsonwebtoken")
const User = require("../models/user")


const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decode.id).select("-password");
            next();
        } catch (error) {
            res.status(401);
            throw new Error("Unauthorised User")
        }
    }
    if (!token) {
        res.status(401);
        throw new Error("Unauthorised User")
    }

}
module.exports = { protect }
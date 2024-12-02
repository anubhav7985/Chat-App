const User = require('../models/user')

exports.getUsers = (req, res, next) => {
    const loggedId = req.params.userId;
    User.find({ _id: { $ne: loggedId } }).then(users => {
        return res.status(200).json(users);
    }).catch(err => console.log(err))
}
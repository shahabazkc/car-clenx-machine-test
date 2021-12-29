const { createUser } = require('../../Controllers/user-management/create-user')

//REGISTER POST ROUTE HANDLER
const registerHandler = (req, res, next) => {
    createUser(req.body).then((data) => {
        res.status(200).json(data);
        
    }).catch((err) => {
        res.status(500).json({err:"something went wrong"});
    })
}

module.exports = { registerHandler }
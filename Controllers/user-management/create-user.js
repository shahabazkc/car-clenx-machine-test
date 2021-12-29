const { mongoose } = require('../../Config/mongo-connection');
const { userSchema } = require('../../Models/userModels');
const bcrypt = require('bcryptjs');

const createUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            //CREATING USER OBJECT LIKE USER SCHEMA
            let userData = {
                name: data.name,
                password: data.password,
                email: data.email,
                status: true
            };

            userData.password = await bcrypt.hash(userData.password, 10);

            const Users = mongoose.model('users', userSchema);
            let user = new Users(userData);

            //Saving to the Database
            user.save().then((res) => {

                let response = {
                    status: true,
                    userAdded: true
                };

                resolve(response);

            }).catch((err) => {
                reject(err);
            })
        }
        catch (err) {
            reject(err)
        }

    })
};

module.exports = { createUser }

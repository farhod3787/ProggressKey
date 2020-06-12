const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

const managerSchema = mongoose.Schema({
    login: {type: String},
    password: {type: String},
    image: { type: String},
    fullName: {type: String},
    date: {type: String}
});

managerSchema.statics.hashofPassword = function(pass) {
    let password = {password: pass};
    let hashpass = jwt.sign(password, 'pro');
    return hashpass;
}

managerSchema.statics.generateToken = function(login, password) {
    var value = {
        login: login,
        password: password
    }
    var token = jwt.sign(value, 'pro');
    return token;
}

//                                                               K i r i  sh

managerSchema.statics.verifyUser = function(users, body) {
    var object = {isManager : false};
    var distoken = undefined;
    // console.log(body);

    users.forEach((user) => {
        try{
            distoken = jwt.verify(user.password, 'pro');
           console.log(distoken);
        }
        catch {
        }
        if (distoken) {
            if(user.login == body.login && distoken.password == body.password ) {
                    object.isManager = true;
                    object.adminId = user._id;
                    object.token = jwt.sign({login: user.login, password: user.password}, 'pro')
            }
        }
        else {
            console.log("Distoken Undefined")
        }
    })
    return object;
}



//                                                      T e k s  h i r i  s h

managerSchema.statics.verifyOfUser = function(users, token) {
    var object = {isManager : false,  userId: undefined};
    var distoken = undefined;
    users.forEach((user) => {
        try{
            distoken = jwt.verify(token, 'pro');
        }
        catch {

        }
        if (distoken) {
            if(user.login == distoken.login && user.password == distoken.password ) {
                    object.isManager = true;
                    object.token = jwt.sign({login: user.login, password: user.password}, 'pro');
                    object.userId = user._id;
                    object.userName = user.login;

            }
        }
        else {
            console.log("Distoken Undefined")
        }
    })

    return object;
}



module.exports = mongoose.model('manager', managerSchema);

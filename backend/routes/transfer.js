const express = require('express');
const Transfer = require('../models/transfer');
const Admin = require('../models/admin');
const User = require('../models/users');

const router = express.Router();

 //                                                               R e g i  s t r a t s i o n
router.post('/:token', async function (request, response, next) {
   var body = request.body;
    var token = request.params.token;
    var users = await  User.find();
    console.log(body);
    var obj = await User.verifyOfUser(users, token);

    if(obj.isUser) {
    let transfer = {
        from : obj.userName,
        to : body.to,
        howMuch : body.howMuch,
        date : new Date()
    }
    const trans = new Transfer(transfer);
    trans.save().then( (res) =>{
        response.status(200).json(true)
    }).catch( err =>{
        console.log(err);
        response.status(404).json({message: "Error in Saved transfer"})
    })
} else {
    response.status(404).json({message: "This is not User"})
}
});

router.get('/getHisTransfers/:token', async function( request, response) {
  const token = request.params.token;
  const users = await User.find();
  const object = await User.verifyOfUser(users, token);
  if (object.isUser) {
    const id = object.userName;
    let transfers = await Transfer.find({'from': id});
    response.status(200).json(transfers);
  } else {
    response.status(400).json({message: 'This is not User'});
  }
});

router.get('/getall', async(request, response, next) => {
    let tranfer = await Transfer.find();
    response.status(200).json(tranfer)
});

router.get('/:id', async function(request, response, next) {
    var id = request.params.id;
      await Tranfer.findById(id).then((res) => {
        if (!res) {
            response.status(400).json({ message: "WareHouse Not found" });
        } else {
            response.status(200).json(res);
        }
    }).catch((err) => {
        console.log(err);
        response.status(400).json({ message: "WareHouse Not found" });
    })
})

router.delete('/:id/:token', async function(request, response, next) {
    var id = request.params.id;
    var token = request.params.token;
    var users = await User.find();

    var obj = User.verifyOfUser(users, token);
    if (obj.isUser) {
            await Transfer.findByIdAndDelete(id).then((res) => {
                response.status(200).json({ message: "Transfer deleted!" });
            })
            .catch((err) => {
                console.log(err);
                response.status(400).json({ message: "Error in delete Tarnsfer" });
            })
    } else {
        console.log(obj)
        response.status(400).json({ message: "This is not User" });
    }

})

module.exports = router;


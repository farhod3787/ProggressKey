const express = require('express');
const ReqProduct = require('../models/reqProduct');
const Admin = require('../models/admin');
const Registrar = require('../models/registrar');

const router = express.Router();

 //                                                               R e g i  s t r a t s i o n
router.post('/:token', async function (request, response, next) {
    var body = request.body;
    var token = request.params.token;
    var registrars = await  Registrar.find();
    var obj = await Registrar.verifyOfUser(registrars, token);
    console.log(body);

    if(obj.isRegistrar) {
    let reqProd = {
        products : body.products,
        quantity : body.quantity,
        registrarId : body.registrarId,
        status: false,
        date : new Date().toISOString().
                          replace(/T/, ' ').
                          replace(/\..+/, '')
    }
    const reqProduct = new ReqProduct(reqProd);
    reqProduct.save().then( (res) =>{
      if (res) {
        // console.log(res);

      response.status(200).json(true)
      }
    }).catch( err =>{
        console.log(err);
        response.status(404).json({message: "Error in Saved reqProduct"})
    })
} else {
    response.status(404).json({message: "This is not Registrar"})
}
});

router.get('/getHisRequests/:token', async function( request, response) {
  const token = request.params.token;
  const users = await Registrar.find();
  const object = await Registrar.verifyOfUser(users, token);
  if (object.isRegistrar) {
    const id = object.userId;
    let requests = await ReqProduct.find({'registrarId': id});
    if (requests.lenght > 0) {
      response.status(200).json(requests);
    } else {
      response.status(200).json({message: "Not found"});
    }
  } else {
    response.status(400).json({message: 'This is not Registrar'});
  }
});

router.get('/getall', async(request, response, next) => {
    let requests = await ReqProduct.find({status: false});
    if (requests.length > 0) {
      response.status(200).json(requests)
    } else {
      response.status(404).json(false)
    }
});

router.get('/:id', async function(request, response, next) {
    var id = request.params.id;
      ReqProduct.findById(id).then((res) => {
        if (!res) {
            response.status(400).json({ message: "Request Not found" });
        } else {
            response.status(200).json(res);
        }
    }).catch((err) => {
        console.log(err);
        response.status(400).json({ message: "Request Not found" });
    })
});

router.get('/updateStatus/:id/:token', async function(request, response) {
  var id = request.params.id;
  var token = request.params.token;
  let admins = await Admin.find();
  let obj = await Admin.verifyOfAdmin(admins, token);
  let body = {};
  if (obj.isAdmin) {
      // body = res.json();
      body.status = true;
      ReqProduct.findByIdAndUpdate(id, { $set: body }, { new: true }).then(res => {
          if (res) {
              response.status(200).json({ message: "Status: Success" })
          } else {
              response.status(400).json({ message: "Error in status" })
          }
      }).catch(err => {
          console.log(err);
          response.status(400).json(err);
      })
} else {
  response.status(400).json(false);
}
})

module.exports = router;


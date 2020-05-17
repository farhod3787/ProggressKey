const express = require('express');
const SendProduct = require('../models/sendProduct');
const Admin = require('../models/admin');
const Registrar = require('../models/registrar');
const WareHouse = require('../models/warehouse')
const Product = require('../models/products');
const User = require('../models/users');
const router = express.Router();

 //                                                               R e g i  s t r a t s i o n
router.post('/:token', async function (request, response, next) {
    var body = request.body;
    var token = request.params.token;
    var registrars = await  Registrar.find();
    var obj = await Registrar.verifyOfUser(registrars, token);
    // console.log(body);

    if(obj.isRegistrar) {
    let sendProd = {
        products : body.products,
        quantity : body.quantity,
        registrarId : obj.userId,
        userId : body.userId,
        date : new Date().toISOString().
                          replace(/T/, ' ').
                          replace(/\..+/, '')
    }
    const sendProduct = new SendProduct(sendProd);
    sendProduct.save().then( async (res) =>{
      if (res) {
         try {
           const ware = await WareHouse.find({"filialId": obj.userId});
          //  console.log(warehouse[0]);
            const warehouse = ware[0];
          for (let j=0; j< body.products.length; j++ ) {
             for (let i=0; i< warehouse.products.length; i++) {
                if (body.products[j].product == warehouse.products[i]){
                    warehouse.quantity[i] = warehouse.quantity[i] - body.quantity[j].number;
                }
          }
        }
        const update = await WareHouse.findByIdAndUpdate(warehouse._id, { $set: warehouse }, { new: true });
          response.status(200).json(update)
      } catch (error) {
            console.log(error);
         }
      }
    }).catch( err =>{
        console.log(err);
        response.status(404).json({message: "Error in Saved reqProduct"})
    })
} else {
    response.status(404).json({message: "This is not Registrar"})
}
});

router.get('/getUser/:token', async function( request, response) {
  const token = request.params.token;
  const users = await User.find();
  const object = await User.verifyOfUser(users, token);
  if (object.isUser) {
    const id = object.userId;
    let requests = await SendProduct.find({'userId': id});
    if (requests.length > 0) {
      for (let i=0; i< requests.length; i++) {
        let user = await User.findById(requests[i].userId);
        for (let j=0; j< requests[i].products.length; j++) {
          let id = requests[i].products[j].product;
            let prod = await Product.findById(id);
            requests[i].products[j] = prod.nameUz;
          }
        requests[i].userId = user.login;
      }
      response.status(200).json(requests);
    } else {
      response.status(200).json(false);
    }
  } else {
    response.status(400).json({message: 'This is not Registrar'});
  }
});


router.get('/getReg/:id', async function( request, response) {
  const id = request.params.id;
    let requests = await SendProduct.find({'registrarId': id});
    if (requests.length > 0) {
      for (let i=0; i< requests.length; i++) {
        let user = await User.findById(requests[i].userId);
        for (let j=0; j< requests[i].products.length; j++) {
          let id = requests[i].products[j].product;
            let prod = await Product.findById(id);
            requests[i].products[j] = prod.nameUz;
          }
        requests[i].userId = user.login;
      }
      response.status(200).json(requests);
    } else {
      response.status(200).json({message: "Not found"});
    }

});

router.get('/getall', async(request, response, next) => {
    let requests = await SendProduct.find();
    if (requests.length > 0) {
      response.status(200).json(requests)
    } else {
      response.status(404).json(false)
    }
});

router.get('/:id', async function(request, response, next) {
    var id = request.params.id;
      SendProduct.findById(id).then((res) => {
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

// router.get('/updateStatus/:id/:token', async function(request, response) {
//   var id = request.params.id;
//   var token = request.params.token;
//   let admins = await Admin.find();
//   let obj = await Admin.verifyOfAdmin(admins, token);
//   let body = {};
//   if (obj.isAdmin) {
//       // body = res.json();
//       body.status = true;
//       SendProduct.findByIdAndUpdate(id, { $set: body }, { new: true }).then(res => {
//           if (res) {
//               response.status(200).json({ message: "Status: Success" })
//           } else {
//               response.status(400).json({ message: "Error in status" })
//           }
//       }).catch(err => {
//           console.log(err);
//           response.status(400).json(err);
//       })
// } else {
//   response.status(400).json(false);
// }
// })

module.exports = router;


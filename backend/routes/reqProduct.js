const express = require('express');
const ReqProduct = require('../models/reqProduct');
const Admin = require('../models/admin');
const Registrar = require('../models/registrar');
const WareHouse = require('../models/warehouse')
const Product = require('../models/products')
const router = express.Router();

 //                                                               R e g i  s t r a t s i o n
 router.post('/:token', async function (request, response, next) {
  var body = request.body;
  var token = request.params.token;
  var registrars = await  Admin.find();
  var obj = await Admin.verifyOfAdmin(registrars, token);
  // console.log(body);

  if(obj.isAdmin) {
  let sendProd = {
      products : body.products,
      quantity : body.quantity,
      registerId : body.registrarId,
      adminId : obj.adminId,
      date : new Date().toISOString().
                        replace(/T/, ' ').
                        replace(/\..+/, '')
  }
  // console.log(sendProd);
  // console.log(body.registrarId);

  const sendProduct = new ReqProduct(sendProd);
  sendProduct.save().then( async (res) =>{
    if (res) {
       try {
         const ware = await WareHouse.find({"filialId": obj.adminId});
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


      const regWare = await WareHouse.find({"filialId": body.registrarId});
      //  console.log(warehouse[0]);
        const regWarehouse = regWare[0];
      for (let j=0; j< body.products.length; j++ ) {
         for (let i=0; i< regWarehouse.products.length; i++) {
            if (body.products[j].product == regWarehouse.products[i]){
              regWarehouse.quantity[i] = regWarehouse.quantity[i] + body.quantity[j].number;
            }
      }
    }
    const regUpdate = await WareHouse.findByIdAndUpdate(regWarehouse._id, { $set: regWarehouse }, { new: true });

      if (update && regUpdate) {
        response.status(200).json(true)
      }
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

router.get('/getAdmin/:token', async function( request, response) {
const token = request.params.token;
const users = await Admin.find();
const object = await Admin.verifyOfAdmin(users, token);
if (object.isAdmin) {
  const id = object.adminId;
  let requests = await ReqProduct.find({'adminId': id});
  if (requests.length > 0) {
    for (let i=0; i< requests.length; i++) {
      let user = await Registrar.findById(requests[i].registerId);
      for (let j=0; j< requests[i].products.length; j++) {
        let id = requests[i].products[j].product;
          let prod = await Product.findById(id);
          requests[i].products[j] = prod.nameUz;
        }
      requests[i].registerId = user.login;
    }
    response.status(200).json(requests);
  } else {
    response.status(200).json({message: "Not found"});
  }
} else {
  response.status(400).json({message: 'This is not Registrar'});
}
});


router.get('/getReg/:id', async function( request, response) {
const id = request.params.id;
  let requests = await ReqProduct.find({'registerId': id});
  if (requests.length > 0) {
    for (let i=0; i< requests.length; i++) {
      let user = await Registrar.findById(requests[i].registerId);
      for (let j=0; j< requests[i].products.length; j++) {
        let id = requests[i].products[j].product;
          let prod = await Product.findById(id);
          requests[i].products[j] = prod.nameUz;
        }
      requests[i].registerId = user.login;
    }
    response.status(200).json(requests);
  } else {
    response.status(200).json(false);
  }

});

router.get('/getall', async(request, response, next) => {
  let requests = await ReqProduct.find();
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

module.exports = router;


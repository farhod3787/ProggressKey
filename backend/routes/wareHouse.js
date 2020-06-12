const express = require('express');
const Warehouse = require('../models/warehouse');
const Admin = require('../models/admin');
const Register = require('../models/registrar');
const Product = require('../models/products')
const router = express.Router();

 //                                                               R e g i  s t r a t s i o n
router.post('/:token', async function (request, response, next) {
   var body = request.body;
    var q = body.products;
   for (let i=0; i < q.length; i++) {
     body.products[i] = body.products[i].product;
     body.quantity[i] = body.quantity[i].number;
   }
    var token = request.params.token;
    var admins = await  Admin.find();
    console.log(body);
    var obj = await Admin.verifyOfAdmin(admins, token);

    let wareHouse = {
        name : body.name,
        filialId: body.filialId,
        products : body.products,
        quantity: body.quantity
    }
    const ware = new Warehouse(wareHouse);
    console.log(ware);

    if(obj.isAdmin) {
        ware.save().then( (res) =>{
        response.status(200).json({message: "New ware saved"})
    }).catch( err =>{
        console.log(err);
        response.status(404).json({message: "Error in Saved ware"})
    })
}
else {
    response.status(404).json({message: "This is not Admin"})
}
});

router.get('/getall', async(request, response, next) => {
    let warehouse = await Warehouse.find();
    response.status(200).json(warehouse)
});

router.get('/filial/:filialId', async (request, response) => {
  var date = {};
  var id = request.params.filialId;
        var ware = await Warehouse.find({'filialId': id});
        if (ware.length > 0) {
          response.status(200).json(ware[0]);
        } else {
          response.status(200).json(false);
        }
});


router.get('/:id', async function(request, response, next) {
    var id = request.params.id;
        Warehouse.findById(id).then( async (res) => {
        if (!res) {
            response.status(400).json({ message: "WareHouse Not found" });
        } else {
            const ware = res;
            for (let i=0; i< ware.products.length; i++) {
              let id = ware.products[i];
              let prod = await Product.findById(id);
              ware.products[i] = prod.nameUz;
            }
            const reg = await Register.findById(ware.filialId);
            ware.filialId = reg.fullName
            response.status(200).json(ware);
        }
    }).catch((err) => {
        console.log(err);
        response.status(400).json({ message: "WareHouse Not found" });
    })
})

router.delete('/:id/:token', async function(request, response, next) {
    var id = request.params.id;
    var token = request.params.token;
    var admin = await Admin.find();

    var obj = Admin.verifyOfAdmin(admin, token);
    if (obj.isAdmin) {
            await Warehouse.findByIdAndDelete(id).then((res) => {
                response.status(200).json({ message: "WareHouse deleted!" });
            })
            .catch((err) => {
                console.log(err);
                response.status(400).json({ message: "Error in delete WareHouse" });
            })
    } else {
        console.log(obj)
        response.status(400).json({ message: "This is not Admin" });
    }

})

router.patch('/:id/:token' , async function(request, response, next) {
    var id = request.params.id;
    var products = request.body.products;
    var quantity = request.body.quantity;
    const ware = await Warehouse.findById(id)
    var long = ware.products;
    for (let i = 0; i< long.length; i++) {
      let old = ware.quantity[i]
      for ( let j = 0; j < products.length; j++) {
        if (long[i] == products[j].product){
          ware.quantity[i] = old + quantity[j].number
        }
      }
    }
    var token = request.params.token;
    var admin = await Admin.find();

    var obj = Admin.verifyOfAdmin(admin, token);
    if (obj.isAdmin) {
        await Warehouse.findByIdAndUpdate(id, { $set: ware }, { new: true }).then((res) => {
            if (res) {
                response.status(200).json(true);
            } else {
                response.status(400).json({ message: "Error in Update WareHouse" })
            }
        }).catch(err => {
            console.log(err);
            response.status(400).json(false);
        })
    } else {
      response.status(400).json(false);
    }
})


module.exports = router;


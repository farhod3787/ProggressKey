const express = require('express');
const multer = require('multer');
const User = require('../models/users');
const Registrar = require('../models/registrar');
const Admin = require('../models/admin');
const config = require('../config/config');
// const jwt = require('jsonwebtoken');
const router = express.Router();

var url = config.url;
// var url = config.domen;

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg'
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      const isValid = MIME_TYPE_MAP[file.mimetype];
      let error = new Error("Errorrr");
      if (isValid) {
          error = null;
      }
      cb(error, "backend/images");
  },
  filename: (req, file, cb) => {
      const name = file.originalname.toLowerCase().split(' ').join('-');
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, name + '-' + Date.now() + '.' + ext);
  }
})
const upload = multer({ storage: storage })


 //                                                               R e g i  s t r a t s i o n
router.post('/:token',  upload.single('image'), async function (request, response, next) {
   var body = request.body;
    var file = request.file;
    var token = request.params.token;
    var admin = await Admin.find();

    var obj = Admin.verifyOfAdmin(admin, token);

    let registrar = {
        filialId : body.filialId,
        login : body.login,
        image: file.filename,
        // image: body.image,
        password: await Registrar.hashofPassword(body.password),
        registerUserId :  body.registerUserId,
        fullName :  body.fullName,
        generalBalance : body.generalBalance,
        warehouseId : body.warehouseId,
        date: new Date().toISOString().
                          replace(/T/, ' ').
                          replace(/\..+/, '')
    }
    if (obj.isAdmin) {

    const reg = new Registrar(registrar);
        let token = await Registrar.generateToken(reg.login, reg.password);
        reg.save().then( (res) =>{
        response.status(200).json({token: token})
    }).catch( err =>{
        console.log(err);
        response.status(404).json({message: "Error in Saved user"})
    })
  } else {
    response.status(404).json({message: "Not admin"})

  }

});


router.get('/', (request, response, next) =>{
    var users = [];
    Registrar.find().then( async  (all) =>{
        for (let i=all.length-1; i>=0; i--) {
          let use = all[i].registerUserId;
          for (let j=0; j< use.length; j++) {
            let user = await User.findById(use[j]);
            if (user) {
              all[i].registerUserId[j] = url + '/images/' + user.image;
            } else {
              all[i].registerUserId[j] = false;
            }
          }
            all[i].image = url + '/images/' + all[i].image;
            users.push(all[i]);
        }
        response.status(200).json(users);
    }).catch(  (err)=>{
        console.log(err)
        response.status(400).json({message: "Error in Get All Users"});

    })
});


router.get('/:id', async function(request, response) {
    var data = {};
    var id = request.params.id;

     Registrar.findById(id).then( (res)=>{
            if(!res) {
                success = false;
                data = "User not found"
                response.status(400).json(data);
            }
            else {
              res.image = url + '/images/' + res.image;
                data = res;
                response.status(200).json(data);
            }
        })
        .catch( (err) =>{
            console.log(err);
            response.status(400).json()
        });
});

router.get('/team/:id', async  function( req, res) {
    var id = req.params.id;
    var users = [];
    var Id = [];
    const register = await Registrar.findById(id);
    if (register) {
      Id = register.registerUserId;
      for (let i=0; i<Id.length; i++) {
        const user = await User.findById(Id[i]);

        if (user) {
          user.image = url + '/images/' + user.image;
          users.push(user);
        }
      }
      for (let j=0; j< users.length; j++) {
        let use = users[j].addUsers;
        for (let q=0; q< use.length; q++) {
          let img = await User.findById(use[q]);
          if (img) {
            users[j].addUsers[q] = url + '/images/' + img.image;
          }
        }
      }
      res.status(200).json(users);
    } else {
      console.log('Register not found');
    }

})

router.delete('/:id/:token', async function (request, response, next ){
    var data = {};
    var id = request.params.id;
    var token = request.params.token;
    var users = await Admin.find();
    var success = false;
    var obj = Admin.verifyOfAdmin(users, token);

    if (obj.isAdmin) {
        success = true
            // await Registrar.findById(id).then( (res) =>{
            //     if(res) {
            //       var image= res.image;
            //       fs.unlink('backend/images/' + image, function (err) {
            //           if (err) {
            //           console.log(err.message);}
            //           else {
            //               console.log('File deleted!');
            //           }
            //       });
            //         return res
            //     }
            //     else {
            //         success = false
            //         data.message = "This User not found";
            //         return null;
            //     }
            // }).catch( err =>{
            //     success = false
            //     response.status(400).json({message: "User not found"});
            // });
                await Registrar.findByIdAndRemove(id).catch( err => {
                    success = false;
                })
                if(success) {
                    response.status(200).json({message: "User deleted"})
                }
                else {
                    response.status(400).json({message: "Error in Delete User"})
                }
            }

    else {
        response.status(400).json(data)
    }
})


router.patch('/updateRegistrar/:id/:token', multer({ storage: storage }).single('image'), async function(request, response, next) {
  var id = request.params.id;
  var token = request.params.token;
  var admin = await Registrar.find();
  var obj = Registrar.verifyOfUser(admin, token);
  if (obj.isRegistrar) {
    await Registrar.findById(id).then( (res) =>{
      var image= res.image;
       fs.unlink('backend/images/' + image, function (err) {
           if (err) {
           console.log(err.message);}
           else {
               console.log('File deleted!');
           }
       });
   });
  var body = request.body;
  body.image = request.file.filename;
      await Registrar.findByIdAndUpdate(id, { $set: body }, { new: true }).then((res) => {
          if (res) {
              response.status(200).json(true);
          } else {
              response.status(400).json(false)
          }
      }).catch(err => {
          console.log(err);
          response.status(400).json(false);
      })
  }
  else {
    response.status(400).json(false);
  }
})

router.get('/verifyRegistrar/:token', async function(request, response) {
     var token = request.params.token;
        var users = await Registrar.find();

    var obj = Registrar.verifyOfUser(users, token);
    response.status(200).json(obj);

})
 //                                                                K i r  i  sh

router.post('/', async function(request, response) {
    var body = request.body;
    var users = await Registrar.find();
    var obj = Registrar.verifyUser(users, body);
    response.status(200).json(obj)
    // if(obj.isRegistrar) {
    //     data.token = obj.token;
    //     data.isRegistrar = obj.isRegistrar;
    //     response.status(200).json(data)
    // }
    // else {
    //     response.status(404).json({message: "User Not found!"})
    // }
});

module.exports = router

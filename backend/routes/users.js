const express = require('express');
const User = require('../models/users');
const Admin = require('../models/admin');
const Regsiter = require('../models/registrar');
const multer = require('multer');
const config = require('../config/config');
var fs = require('fs');

var url = config.url;
// var url = config.domen;

// const jwt = require('jsonwebtoken');

const router = express.Router();

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
 router.post('/:regId', upload.single('image'), async function (request, response, next) {
  var id = request.params.regId;
  var body = request.body;
  var file = request.file;

  var whoAdd = request.body.whoAdd;
  const user = await User.findById(whoAdd);
  var ids = user.addUsers;
  var date_new = new Date();
  var count = 0;
  for ( let i=0; i < ids.length; i++) {
    let date_ob
    let limit = await User.findById(ids[i]);
    if (limit) {
      date_ob = limit.date.getDate();
      if(date_ob == date_new.getDate() ) {
          count++;
      }
    }
  }

  if ( body.type == 'Iste\'molchi') {
    if (count < 6) {

      let user = {
        type : body.type,
        login : body.login,
        password: await User.hashofPassword(body.password),
        fullName :  body.fullName,
        telNumber: body.telNumber,
        filialId: body.filialId,
        image: file.filename,
        firstBalance :  body.firstBalance,
        leftHand : body.leftHand,
        rightHand : body.rightHand,
        whoAdd : body.whoAdd,
        whoBottom : body.whoBottom,
        addUsers : body.addUsers,
        ballOfBinar : body.ballOfBinar,
        ballOfInvite : body.ballOfInvite,
        ballOfCheck : body.ballOfCheck,
        ballOfWeek : body.ballOfWeek,
        ballOfMonth : body.ballOfMonth,
        ball : body.ball,
        genaralBall: body.ball,
        date: new Date()
    }
    const use = new User(user);

    use.save().then( (res) =>{
        var userId = res._id;

        Regsiter.findById(id).then(res => {
          res.registerUserId.push(userId);
        Regsiter.findByIdAndUpdate(id, { $set: res }, { new: true }).then( result => {

        }).catch( error => {
          response.status(404).json(error)
        })
        }).catch( err => {
          response.status(404).json(err)
        });

        User.findById(body.whoBottom).then( res => {
          var update = res
            if (res.leftHand) {
              update.rightHand = userId;
            } else {
              update.leftHand = userId;
            }
            User.findByIdAndUpdate(body.whoBottom, {$set: update}, {new: true}).then( res => {

            }).catch( err => {
              console.log(err);
              response.status(404).json(err)
            })
        }).catch( err => {
          console.log(err);
          response.status(404).json(err)
        });

        User.findById(body.whoAdd).then( res => {
           res.addUsers.push(userId);
           var update = res;
           if (res.ballOfInvite) {
            update.ballOfInvite = res.ballOfInvite + body.ball * 0.15;
            update.genaralBall = res.genaralBall + body.ball * 0.15;
           } else {
            update.ballOfInvite = body.ball * 0.15;
            update.genaralBall = res.genaralBall + update.ballOfInvite;
           }
          User.findByIdAndUpdate(body.whoAdd, {$set: update}, {new: true}).then( res => {

            }).catch( err => {
              console.log(err);
              response.status(404).json(err)
            })
        }).catch( err => {
          console.log(err);
          response.status(400).json(err)
        });


          response.status(200).json(true);
    }).catch( err =>{
        console.log(err);
        response.status(404).json({message: "Error in Saved user"})
    })

    } else {
      response.status(400).json({message: 'Bugunga Limit tugagan'})
    }
  };

  if ( body.type == 'Console' || body.type == 'Leader' ) {
    if (count < 11) {
      let user = {
        type : body.type,
        login : body.login,
        password: await User.hashofPassword(body.password),
        fullName :  body.fullName,
        telNumber: body.telNumber,
        filialId: body.filialId,
        image: file.filename,
        firstBalance :  body.firstBalance,
        leftHand : body.leftHand,
        rightHand : body.rightHand,
        whoAdd : body.whoAdd,
        whoBottom : body.whoBottom,
        addUsers : body.addUsers,
        ballOfBinar : body.ballOfBinar,
        ballOfInvite : body.ballOfInvite,
        ballOfCheck : body.ballOfCheck,
        ballOfWeek : body.ballOfWeek,
        ballOfMonth : body.ballOfMonth,
        ball : body.ball,
        genaralBall: body.ball,
        date: new Date()
    }
    const use = new User(user);

    use.save().then( (res) =>{
        var userId = res._id;

        Regsiter.findById(id).then(res => {
          res.registerUserId.push(userId);
        Regsiter.findByIdAndUpdate(id, { $set: res }, { new: true }).then( result => {

        }).catch( error => {
          response.status(404).json(error)
        })
        }).catch( err => {
          response.status(404).json(err)
        });

        User.findById(body.whoBottom).then( res => {
          var update = res
            if (res.leftHand) {
              update.rightHand = userId;
            } else {
              update.leftHand = userId;
            }
            User.findByIdAndUpdate(body.whoBottom, {$set: update}, {new: true}).then( res => {

            }).catch( err => {
              console.log(err);
              response.status(404).json(err)
            })
        }).catch( err => {
          console.log(err);
          response.status(404).json(err)
        });

        User.findById(body.whoAdd).then( res => {
           res.addUsers.push(userId);
           var update = res;
           if (res.ballOfInvite) {
            update.ballOfInvite = res.ballOfInvite + body.ball * 0.15;
            update.genaralBall = res.genaralBall + body.ball * 0.15;
           } else {
            update.ballOfInvite = body.ball * 0.15;
            update.genaralBall = res.genaralBall + update.ballOfInvite;
           }
          User.findByIdAndUpdate(body.whoAdd, {$set: update}, {new: true}).then( res => {

            }).catch( err => {
              console.log(err);
              response.status(404).json(err)
            })
        }).catch( err => {
          console.log(err);
          response.status(400).json(err)
        });


          response.status(200).json(true);
    }).catch( err =>{
        console.log(err);
        response.status(404).json({message: "Error in Saved user"})
    })
    } else {
      response.status(400).json({message: 'Bugunga Limit tugagan'})
    }
  };
});

router.get('/', (request, response, next) =>{
    var users = [];
    User.find().then( (all) =>{
        for (let i=all.length-1; i>=0; i--) {
          all[i].image = url + '/images/' + all[i].image;
            users.push(all[i]);
        }
        response.status(200).json(users);
    }).catch(  (err)=>{
        console.log(err)
        response.status(400).json({message: "Error in Get All Users"});

    })
});

router.get('/withAdmin', (request, response, next) =>{
  var users = [];
  User.find().then( async (all) =>{
      for (let i=all.length-1; i>=0; i--) {
        let use = all[i].addUsers;
        for (let j=0; j< use.length; j++) {
            let user = await User.findById(use[j]);
            if (user) {
              all[i].addUsers[j] = url + '/images/' + user.image;
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

router.get('/emptyUsers', (request, response, next) =>{
  var users = [];
  User.find().then( (all) =>{
      for (let i=all.length-1; i>=0; i--) {
        if (!all[i].leftHand || !all[i].rightHand) {
        all[i].image = url + '/images/' + all[i].image;
          users.push(all[i]);
        }
      }
      response.status(200).json(users);
  }).catch(  (err)=>{
      console.log(err)
      response.status(400).json({message: "Error in Get All Users"});

  })
});


router.get('/:filialId', async (request, response) => {
  var filialId = request.params.filialId;
  var users = await User.find({filialId: filialId});
  for (let i=users.length-1; i>=0; i--) {
    users[i].image = url + '/images/' + users[i].image;
  }
  response.status(200).json(users);
})

// router.get('/withHome/:filialId', async (request, response) => {
//   var filialId = request.params.filialId;
//   var users = await User.find({filialId: filialId});
//   for (let i=users.length-1; i>=0; i--) {
//     let use = users[i].addUsers;
//     for (let j=0; j< use.length; j++) {
//         let user = await User.findById(use[j]);
//         if (user) {
//           all[i].addUsers[j] = url + '/images/' + user.image;
//         }
//     }
//     users[i].image = url + '/images/' + users[i].image;
//   }
//   response.status(200).json(users);
// })

router.get('/verifyLogin/:login', async (request, response) => {
  var login = request.params.login;
  let result = false;
  let users = await User.find();
    for (let i = 0; i <= users.length - 1; i++) {
        if (users[i].login === login) {
          result = true;
          break;
        }
    }
    response.status(200).json(result);
})

router.get('/me/:id', async function(request, response) {

    var data = {};
    var id = request.params.id;
    User.findById(id).then( (res)=>{
      if (res) {
        res.image = url + '/images/' + res.image;
        response.status(200).json(res);
      } else {
        response.status(404).json(false);
      }
        })
        .catch( (err) =>{
            console.log(err);
            response.status(400).json()
        });
});


router.delete('/:token', async function (request, response, next ){
    var data = {};
    // var id = request.params.id;
    var token = request.params.token;
    var users = await User.find();
    var success = false;
    var obj = User.verifyOfUser(users, token);
    if (obj.isUser) {
        success = true
            User.findById(obj.userId).then( (res) =>{
                if(res) {
                  var image= res.image;
                  fs.unlink('backend/images/' + image, function (err) {
                      if (err) {
                      console.log(err.message);}
                      else {
                          console.log('File deleted!');
                      }
                  });
                    return res
                }
                else {
                    success = false
                    data.message = "This User not found";
                    return null;
                }
            }).catch( err =>{
                success = false
                response.status(400).json({message: "User not found"});
            })

                await User.findByIdAndRemove(obj.userId).catch( err => {
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
// status ni o'zgartirish

router.patch('/:id', async function(request, response) {
    var id = request.params.id;
    let body = {};
    User.findById(id).then(res => {
      var image= res.image;
      fs.unlink('backend/images/' + image, function (err) {
          if (err) {
          console.log(err.message);}
          else {
              console.log('File deleted!');
          }
      });

        body = res;
        body.status = true;
        User.findByIdAndUpdate(id, { $set: body }, { new: true }).then(res => {
            if (res) {
                response.status(200).json({ message: "Status: True" })
            } else {
                response.status(400).json({ message: "Error in status" })
            }
        }).catch(err => {
            console.log(err);
            response.status(400).json(err);
        })
    })
})


router.patch('/updateUser/:id/:token', multer({ storage: storage }).single('image'), async function(request, response, next) {
  var id = request.params.id;
  var token = request.params.token;
  var admin = await User.find();
  var obj = User.verifyOfUser(admin, token);
  if (obj.isUser) {
    await User.findById(id).then( (res) =>{
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
      await User.findByIdAndUpdate(id, { $set: body }, { new: true }).then((res) => {
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


router.get('/verify/User/:token', async function(request, response) {
     var token = request.params.token;
        var users = await User.find();

    var obj = User.verifyOfUser(users, token);
    response.status(200).json(obj);

})
 //                                                                K i r  i  sh

router.post('/sign/home', async function(request, response) {
    var body = request.body;
    console.log(body.login);

    var data = {}
    var users = await User.find();
    var obj = User.verifyUser(users, body);

    if(obj.isUser) {
        data.token = obj.token;
        data.isUser = obj.isUser;
        response.status(200).json(data)
    }
    else {
        response.status(404).json({message: "User Not found!"})
    }
});

router.get('/team/:token', async function(request, response) {
  var token = request.params.token;
  var users = await User.find();
  var obj = User.verifyOfUser(users, token);

  if(obj.isUser) {
    var id = obj.userId;
    var team = await User.find({'whoBottom' : id});
    for (let i =0; i<= team.length - 1; i++) {
      team[i].image = url + '/images/' + team[i].image
    }
    response.status(200).json(team)
  }
})

router.get('/team/:id', async function(request, response) {
  var id = request.params.id;
  // var users = await User.find();
  // var obj = User.verifyOfUser(users, token);

  // if(obj.isUser) {
    // var id = obj.userId;
    var team = await User.find({'whoBottom' : id});
    response.status(200).json(team)
  // }
})

router.get('/user/Information/:token', async function( request, response) {
    var token = request.params.token;
    var users = await User.find();

    var object = await User.verifyOfUser(users, token);
    if (object.isUser) {
      var user = await User.findById(object.userId);
      response.status(200).json(user)
    } else {
      response.status(400).json(false)
    }
});




module.exports = router

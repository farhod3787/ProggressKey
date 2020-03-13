const express = require('express');
const Filial = require('../models/filal');
const Registrar = require('../models/registrar');
const Admin = require('../models/admin')
const router = express.Router();

 //                                                               R e g i  s t r a t s i o n
router.post('/:token', async function (request, response, next) {
   var body = request.body;
    var token = request.params.token;
    var admins = await  Registrar.find();
    var obj = await Registrar.verifyOfUser(admins, token);

    let filial = {
        province : body.province,
        region : body.region,
        name : body.name
    }
    const newFilial = new Filial(filial);

    if(obj.isRegistrar) {
      newFilial.save().then( (res) =>{
        response.status(200).json({message: "New Filial saved"})
    }).catch( err =>{
        console.log(err);
        response.status(404).json({message: "Error in Saved Filial"})
    })
}
else {
    response.status(404).json({message: "This is not Registrar"})

}
});

router.get('/getall', async(request, response, next) => {
    let types = await Filial.find();
    response.status(200).json(types)
})

router.get('/getFilial/:id', async function(request, response, next) {
    var id = request.params.id;
      await Filial.findById(id).then((res) => {
        if (!res) {
            response.status(400).json({ message: "Filial Not found" });
        } else {
            response.status(200).json(res);
        }
    }).catch((err) => {
        console.log(err);
        response.status(400).json({ message: "Filial Not found" });
    })
})

router.delete('/:id/:token', async function(request, response, next) {
    var id = request.params.id;
    var token = request.params.token;
    var admin = await Registrar.find();

    var obj = Registrar.verifyOfUser(admin, token);
    if (obj.isModerator) {
            await Filial.findByIdAndDelete(id).then((res) => {
                response.status(200).json({ message: "Filial deleted!" });
            })
            .catch((err) => {
                console.log(err);
                response.status(400).json({ message: "Error in delete Filial" });
            })
    } else {
        console.log(obj)
        response.status(400).json({ message: "This is not Moderator" });
    }

})

router.patch('/:id/:token' , async function(request, response, next) {
    var id = request.params.id;
    var body = request.body;

    // body.logo = request.file.filename;

    var token = request.params.token;
    var admin = await Admin.find();

    var obj = Registrar.verifyOfUser(admin, token);
    if (obj.isAdmin) {
        await Filial.findByIdAndUpdate(id, { $set: body }, { new: true }).then((res) => {
            if (res) {
                response.status(200).json({ message: "Category Update Successfully" });
            } else {
                response.status(400).json({ message: "Error in Update Category" })
            }
        }).catch(err => {
            console.log(err);
            response.status(400).json({ message: "This is Not Moderator" });
        })
    }
})


module.exports = router;


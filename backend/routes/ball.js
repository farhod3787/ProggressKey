const User = require('../models/users');

function test(id) {
  User.findById(id).then( async user => {
    var result = await User.find();
    let q = result.length;


    // for (let i=0; i < q; i++) {
      var leftUsers = [];
      var rightUsers = [];
      var left = user.leftHand;
      var right;
      var leftH
      var rightH = user.rightHand;

      //  Left Hand uchun
      for(let j=0; j< q; j++) {

        if (left == result[j]._id) {
            leftUsers.push(result[j].login);

            if (result[j].leftHand) {
              left = result[j].leftHand;
            }

            if (result[j].rightHand) {
              right = result[j].rightHand;
            }
        }

        if (right == result[j]._id) {
          leftUsers.push(result[j].login);

          if (result[j].leftHand) {
            left = result[j].leftHand;
          }

          if (result[j].rightHand) {
            right = result[j].rightHand;
          }
      }
     }

    //  Right Hand uchun
     for(let j=0; j< q; j++) {

      if (rightH == result[j]._id) {
          rightUsers.push(result[j].login);

          if (result[j].leftHand) {
            leftH = result[j].leftHand;
          }

          if (result[j].rightHand) {
            rightH = result[j].rightHand;
          }
      }

      if (leftH == result[j]._id) {
        rightUsers.push(result[j].login);

        if (result[j].leftHand) {
          leftH = result[j].leftHand;
        }

        if (result[j].rightHand) {
          rightH = result[j].rightHand;
        }
    }
   }

   console.log('Left Hands');
   console.log(leftUsers);

   console.log('Right Hands');
   console.log(rightUsers);

    // }
    })
}

module.exports.test = test;

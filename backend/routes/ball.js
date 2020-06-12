const User = require('../models/users');


var left = 0;
var right = 0;
 async function sizeHands(id) {
  let user = await User.findById(id);
  if (user.leftHand && user.rightHand) {
    sizeHelperLeft(user.leftHand)
    sizeHelperRight(user.rightHand);
      console.log(user.login  +  " --  left");
      console.log(left);
      console.log(user.login  +  " --  right");
      console.log(right);
      left = 0;
      right = 0;
    } else {
      console.log('bir nima kam');

  }


  // for (let i=0; i< users.length; i++) {

  //   if (users[i].leftHand && users[i].rightHand) {
  //     let leftId = users[0].leftHand;
  //     let rightId = users[0].rightHand;
  //     // sizeHelperLeft(leftId);
  //     sizeHelperRight(rightId);
  //     // console.log("left");
  //     // console.log(left);
  //     console.log("right");
  //     console.log(right);
  //     left = 0;
  //     right = 0;
  //   } else {
  //     console.log('Userni chap yoki o\'ng qo\'li yo\'q');
  //   }
  // }
 }
async function sizeHelperLeft(id) {
  let node = await User.findById(id);
  if (node) {
    left = left +1;
      return 1 + sizeHelperLeft(node.leftHand) + sizeHelperLeft(node.rightHand);
  } else {
    return 0;

  }
}

async function sizeHelperRight(id) {
  let node = await User.findById(id);
  if (node) {
    right = right +1;
      return 1 + sizeHelperRight(node.leftHand) + sizeHelperRight(node.rightHand);
  } else {
    return 0;

  }
}




module.exports.sizeHands = sizeHands;
module.exports.sizeHelperLeft = sizeHelperLeft;


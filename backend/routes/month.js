
const User = require('../models/users');

async function month() {
console.log('testing month function');

try {
    let users = await User.find();

    for(let i=0; i< users.length; i++) {
      if (users[i].leftHand && users[i].rightHand) {
          let left = users[i].leftHand;
          let right = users[i].rightHand
          let updUser = users[i];

          let leftUser = await User.findById(left);
          let rightUser = await User.findById(right);
          if (leftUser && rightUser) {
              let LBall = leftUser.genaralBall;
              let RBall = rightUser.genaralBall;
              if (RBall > 10000 && LBall > 10000) {
                  let monthBall = (RBall + LBall) * 0.05;
                  // console.log(monthBall);
                  if (updUser.ballOfMonth) {
                    updUser.ballOfMonth = updUser.ballOfMonth + monthBall;
                  } else {
                    updUser.ballOfMonth = monthBall;
                  }
                  updUser.genaralBall = updUser.genaralBall + updUser.ballOfMonth;
                  try {
                    let update = await User.findByIdAndUpdate(updUser._id, {$set: updUser}, {new: true})
                  } catch (error) {
                    console.log('Error in update User in generate month ball');
                   console.log(error);
                  }
              } else {
                console.log('Bali yetmadi');
              }
          } else {
            console.log('Userning chap yoki o\'ng qo\'li mavjud emas');
          }
      } else {
        console.log('Userning chap yoki o\'ng qo\'li mavjud emas');
      }
    }
} catch (error) {
    console.log('Users not found');
}
}


module.exports.month = month;

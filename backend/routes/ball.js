const User = require('../models/users');

async function sizeHands() {
  let users = await User.find();
  if (users.length > 0) {
  for(let i=0; i< users.length; i++) {
    let id = users[i]._id;
    let user = await User.findById(id);
    if (user) {
    if (user.leftHand && user.rightHand) {
      let leftUser = await User.findById(user.leftHand);
      let rightUser = await User.findById(user.rightHand);
      if (leftUser && rightUser) {
        let left = leftUser.firstbalance;
        let right = rightUser.firstbalance;

        if (left == right) {
          if(user.type == 'Iste\'molchi') {
              if (user.ballOfWeek) {
                user.ballOfWeek = user.ballOfWeek + 50;
              } else {
                user.ballOfWeek = 50;
              }
          }
          if (user.type == 'Console') {
            if (user.ballOfWeek) {
              user.ballOfWeek = user.ballOfWeek + 100;
            } else {
              user.ballOfWeek = 100;
            }
          }
          if (user.type == 'Leader') {
            if (user.ballOfWeek) {
              user.ballOfWeek = user.ballOfWeek + 100;
            } else {
              user.ballOfWeek = 100;
            }
          }
          try {
            const update = await User.findByIdAndUpdate(id, {$set: user}, {new: true} )
            if (update){
              console.log('Updated');
            } else {
              console.log('Error in update Inform');

            }
          } catch (error) {
            console.log('Error in update');

          }
      } else {
        console.log('Userni chap va o\'ng qo\'llari teng emas');
      }
      } else {
        console.log('User not found');
      }
      } else {
        console.log('Userning chap yoki o\'ng qo\'li yo\'q');
    }
  } else {
    console.log('User not found');
  }
}
}
}




module.exports.sizeHands = sizeHands;


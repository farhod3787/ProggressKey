const User = require('../models/users');

// 1- va 2- qadamlardagi userlar
// function hands(id) {
//   User.findById(id).then( async user => {

//     if (user.type == 'Iste\'molchi' ) {           // aslida Console b-shi k-k !s
//       var result = await User.find();
//       let q= result.length;
//       var first = [];
//       var second = [];
//       var third = [];
//       let j = 0;
//       let w = 0;

//       for ( let i = 0; i < q; i++) {
//         if (result[i].leftHand && result[i].rightHand ) {
//           j++;
//           w++;
//           if ( (j == 1) && (w <= 3 )) {
//             first.push(result[i].leftHand);
//             first.push(result[i].rightHand);
//           }
//           if ( (j == 2) && (w <= 3 )) {
//             second.push(result[i].leftHand);
//             second.push(result[i].rightHand);
//             j--;
//           }
//           if (w > 3) {
//             third.push(result[i].leftHand);
//             third.push(result[i].rightHand);
//           }
//           // left = result[i].leftHand
//         }
//       }
//       console.log("first");
//       console.log(first);
//       console.log("second");
//       console.log(second);
//       console.log("Third");
//       console.log(third);
//       // console.log("W = ");
//       // let date_ob = new Date();
//       // let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
//       // let date = ("0" + date_ob.getDate()).slice(-2);
//       // console.log(date_ob.getMonth() + 1);
//     }
//     })
// }

// 1-qadamga 5% check 1 haftada 1 marta
async function check() {
  let users = await User.find();
  for (let i = 0; i < users.length; i++) {
    let id = users[i]._id;

    User.findById(id).then( async result => {
  console.log(result.type);
if (result.type == 'Iste\'molchi') {
  if (result.leftHand && result.rightHand) {
    let left = await User.findById(result.leftHand);
    let right = await User.findById(result.rightHand);
    let check = (left.genaralBall + right.genaralBall) * 0.05;
    if ( result.ballOfCheck) {
      result.ballOfCheck = result.ballOfCheck + check;
      result.genaralBall = result.genaralBall + check;
    } else {
      result.ballOfCheck = check;
      result.genaralBall = result.genaralBall + check;
    }
    try {
      const update = await User.findByIdAndUpdate(result._id, {$set: result}, {new: true} );
      // console.log(update);
    } catch (error) {
      console.log(error);
    }
  }
  else {
    console.log('Userni chap yoki o\'ng qo\'li mavjud emas');
  }
}


if ( result.type == 'Console') {

  if (result.leftHand && result.rightHand) {
    let left = await User.findById(result.leftHand);
    let right = await User.findById(result.rightHand);
    let check = (left.genaralBall + right.genaralBall) * 0.05;
    console.log('1-qadamdagi ball');
    console.log(check);
    //  2-qadam
    if (left.leftHand && left.rightHand && right.leftHand && right.rightHand ) {
      let secBall1 = await User.findById(left.leftHand);  // left.leftHand;
      let secBall2 = await User.findById(left.rightHand); // left.rightHand;
      let secBall3 = await User.findById(right.leftHand); // right.leftHand;
      let secBall4 = await User.findById(right.rightHand); //right.rightHand;
      let secGenBall = (secBall1.genaralBall + secBall2.genaralBall + secBall3.genaralBall + secBall4.genaralBall) * 0.03;

      if ( result.ballOfCheck) {
        result.ballOfCheck = result.ballOfCheck + check + secGenBall;
      } else {
        result.ballOfCheck = check + secGenBall;
      }
      result.genaralBall = result.genaralBall + check + secGenBall;

    }
    else {
      console.log('2-qadam uchun userlar to\'liq emas');
      if ( result.ballOfCheck) {
        result.ballOfCheck = result.ballOfCheck + check;
      } else {
        result.ballOfCheck = check;
      }
      result.genaralBall = result.genaralBall + check;
    }
    const updUser = result;
    try {
      const update = await User.findByIdAndUpdate(result._id, {$set: updUser}, {new: true} );
      // console.log(update);
    } catch (error) {
      console.log(error);
    }
  }
  else {
    console.log('Userni chap yoki o\'ng qo\'li mavjud emas');
  }

}

if ( result.type == 'Leader') {

if (result.leftHand && result.rightHand) {
    let left = await User.findById(result.leftHand);
    let right = await User.findById(result.rightHand);
    let check = (left.genaralBall + right.genaralBall) * 0.05;
    //  2-qadam
    if (left.leftHand && left.rightHand && right.leftHand && right.rightHand ) {
      let secBall1 = await User.findById(left.leftHand);  // left.leftHand;
      let secBall2 = await User.findById(left.rightHand); // left.rightHand;
      let secBall3 = await User.findById(right.leftHand); // right.leftHand;
      let secBall4 = await User.findById(right.rightHand); //right.rightHand;
      let secGenBall = (secBall1.genaralBall + secBall2.genaralBall + secBall3.genaralBall + secBall4.genaralBall) * 0.03;

      // 3-qadam

      if (
        secBall1.leftHand &&
        secBall1.rightHand &&
        secBall2.leftHand &&
        secBall2.rightHand &&
        secBall3.leftHand &&
        secBall3.rightHand &&
        secBall4.leftHand &&
        secBall4.rightHand ) {
        let threBall1 = await User.findById(secBall1.leftHand);
        let threBall2 = await User.findById(secBall1.rightHand);
        let threBall3 = await User.findById(secBall2.leftHand);
        let threBall4 = await User.findById(secBall2.rightHand);
        let threBall5 = await User.findById(secBall3.leftHand);
        let threBall6 = await User.findById(secBall3.rightHand);
        let threBall7 = await User.findById(secBall4.leftHand);
        let threBall8 = await User.findById(secBall4.rightHand);

        let threGenBall = (
          threBall1.genaralBall +
          threBall2.genaralBall +
          threBall3.genaralBall +
          threBall4.genaralBall +
          threBall5.genaralBall +
          threBall6.genaralBall +
          threBall7.genaralBall +
          threBall8.genaralBall
          ) * 0.02;

          if ( result.ballOfCheck) {
            result.ballOfCheck = result.ballOfCheck + check + secGenBall + threGenBall;
          } else {
            result.ballOfCheck = check + secGenBall + threGenBall;
          }

          result.genaralBall = result.genaralBall + check + secGenBall + threGenBall;

      } else {
        console.log('3-qadam to\'liq emas');
        if ( result.ballOfCheck) {
          result.ballOfCheck = result.ballOfCheck + check + secGenBall;
        } else {
          result.ballOfCheck = check + secGenBall;
        }
        result.genaralBall = result.genaralBall + check + secGenBall;
      }
    }
    else {
      console.log('2-qadam uchun userlar to\'liq emas');
      if ( result.ballOfCheck) {
        result.ballOfCheck = result.ballOfCheck + check;
      } else {
        result.ballOfCheck = check;
      }
      result.genaralBall = result.genaralBall + check;
    }
    const updUser = result;
    try {
      const update = await User.findByIdAndUpdate(result._id, {$set: updUser}, {new: true} );
      // console.log(update);
    } catch (error) {
      console.log(error);
    }
  }
  else {
    console.log('Userni chap yoki o\'ng qo\'li mavjud emas');
  }
}
}

).catch ( err => {
  return err;
})
}
}

module.exports.check = check;

// run `node index.js` in the terminal
 const crypto = require("crypto")

 function generateOTP() {
    const otpLength = 6;
    const digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < otpLength; i++) {
        OTP += digits[crypto.randomInt(0, digits.length)];
    }
    return OTP;
  }
  function generateTransactionId() {
    const bytes = crypto.randomBytes(8);
    const transactionId = bytes.toString('hex');
    return transactionId;
  }
//   async function generateRandom(min = 100, max = 999) {
//     return new Promise((resolve, reject) => {
//         const range = max - min;
//         const randomBytes = crypto.randomBytes(8);
//         const randomNumber = randomBytes.toString("hex");
//         //console.log(randomNumber);
  
//         const randomFloat = parseInt(randomNumber.substring((randomNumber.length - 16), randomNumber.length), 16) / Math.pow(2, 64);
//         const number = Math.floor(randomFloat * range) + min;
//         resolve(number);
//     });
//   }
//   const crypto = require('crypto');
//   var token = crypto.randomBytes(8);
//    const data = crypto.randomInt(12,10)
  
//    async function commissionRandomNo() {
//     const currentDate = new Date();
//     const year = currentDate.getFullYear();
//     const digit = "LTLC";
//     const lastTicket = await db.Commission.findOne({
//         order: [['id', 'DESC']],
//         attributes: ['randomNo'],
//     });
//    const lastSeqNumber = lastTicket ? parseInt(lastTicket.randomNo.slice(-4)) : 0;
//     const seqNumber = (lastSeqNumber + 1).toString().padStart(4, '0');
//     const randomNo = `${year}${digit}${seqNumber}`;
//     return randomNo;
//   }
  
//   const str1 = '5';
  
//   console.log(str1.padStart(2, '0'));
//   // Expected output: "05"
  
//   const fullNumber = '2034399002125581';
//   const last4Digits = fullNumber.slice(-4);
//   const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
  
//   console.log(maskedNumber);
//   // Expected output: "************5581"
  
  //console.log(commissionRandomNo());

//   function generateRandomNumberScratch() {
//     const buffer = crypto.randomBytes(8);
//     const randomValue = buffer.readBigInt64BE();
//     const maxValue = 2n ** 63n;
//     const scaledValue = (randomValue * 99n) / maxValue + 1n;
//     const number = Number(scaledValue);
//     return number;
// }
const createRandomString = function (strType, strLength) {
    strLength = typeof (strLength) == 'number' && strLength > 0 ? strLength : false;
    strType = typeof (strType) == 'number' && strType > 0 ? strType : false;
    if (strLength) {
        let possibleCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        if (strType == 1) {
            possibleCharacters = '0123456789';
        }
        let str = '';
        for (i = 1; i <= strLength; i++) {
            let randomCharacter = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
            str += randomCharacter;
        }
        return str;
    } else {
        return false;
    }
};
  
  console.log(createRandomString());
  
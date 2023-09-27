const cron = require("node-cron")
const model = require("../model/restapi")
const nodemailer = require("nodemailer")
const config = require("../config/config")
const sendmailAllUser = (mailobj)=>{
 const transporter =  nodemailer.createTransport({
  host:'smtp.ethereal.email',
  port :587,
  secure:false,
  requireTLS:true,
    auth:{
        user:config,emailUser,
        pass:config.emailPassword
    }


 })
const mailOption = {
    from:"node server",
    to:mailobj,
    subject:"cron testing mail",
    html:"<p>for testing creon </p>"
}
 transporter.sendMail(mailOption,function(error,info){
    if(error){
        console.log(error)
    }else{
        console.log("send mail",info.response)
    }
 })

}
const sendMailerAllUser = () =>{
    try {
        
        cron.schedule("* * * * * *", async function(){
            
            var userdata = await  model.find({});
            if(userdata.length>0){
                
                var emails = [];
                userdata.map((key)=>{
                    emails.push(key.email);
                    
                })
                
                sendmailAllUser(emails);
                console.log(emails);

            }

        })



    } catch (error) {
        console.log("something went wrong")
    }

}

module.exports = sendMailerAllUser;

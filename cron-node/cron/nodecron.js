const cron = require("node-cron")
const fs = require("fs");

// const file = require("../mynewfile1.md")
const array = [{name:"akash",add:"bhopal"},{name:"ak",add:"bhopal"},{name:"rohit",add:"bhopal"},{name:"suman",add:"bhol"},{name:"sandip",add:"pal"}]
const cronjob = async (req, res) => {
    cron.schedule("*/10 * * * * *", () => {
        console.log("running the task every minute")
        // const data = fs.readFile('/mynewfile1.md', "utf8", function (err) {
        //     if (err) throw err;
        //     console.log('Saved!');
        // });
       // const array = [1, 2, 3, 4, 5, 6, 12]
        // for (i = 0; i < array.length; i++) {
        //     console.log(array[i])
        // }
     const arr= array.map((item) =>item.name)
        //  array.forEach(element => {
        //     console.log(element)
        //  });
        // console.log(hii, "hi")
       console.log(arr)
        res.send("run every second")

    })
}
module.exports = cronjob
const User = require("../model/user")
const userdata = async (req, res) => {

    const jane = User.build({ firstName: "firstName", lastName: "lastName" });
    console.log(jane instanceof User); // true
    console.log(jane.name); // "Jane"
    await jane.save();
    console.log('Jane was saved to the database!');
    console.log(jane.toJSON())
    res.status(200).json(jane.toJSON())
}

const postdata = async (req, res) => {
    try {
        const postdat = req.body
        console.log(postdat, "post")
        const adding = await User.create(postdat)
        // const insert = await adding.save();
        res.status(200).json(adding)

    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "something went wrong" })
    }

}

const getdata = async (req, res) => {

    try {
        const finddata = await User.findAll({})
        res.status(200).json(finddata)
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "something went wrong" })
    }
}
const getdataid = async (req, res) => {

    try {
        
        const finddata = await User.findOne({
           where :{
            id:req.params.id
           }
        })
        res.status(200).json(finddata)
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "something went wrong" })
    }
}
const deletedata = async (req, res) => {

    try {
        
        const finddata = await User.destroy({
           where :{
            id:req.params.id
           }
        })
        res.status(200).json({ message: "delete succesfully" })
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "something went wrong" })
    }
}
const updatedata = async (req, res) => {

    try {
        const update1 = req.body
        const finddata = await User.update({update1},{
           where :{
            id:req.params.id
           }
        })
        res.status(200).json(finddata)
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "something went wrong" })
    }
}

module.exports = { userdata, postdata, getdata, getdataid ,deletedata,updatedata}
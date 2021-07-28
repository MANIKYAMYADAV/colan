var express = require('express');
var router = express.Router();

let bcrypt = require("bcrypt")
const user = require('../modals/user')
// var user = require('../models/user')
const loginUser = require('../modals/userLogin');

// const helper = require('../../helpers/CommonHelper')
const jwt = require("jsonwebtoken");

//body parser(which means to get understand back end  code of front end code angular nothing like translater )
router.use(express.json());

router.post('/login', (req, res) => {
    let {emailId,password} = req.body;

    loginUser.findOne({ emailId: emailId }, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            if (!user) {
                res.send("Invalid Email");
            } else
                if (user.password !== userData.password) {
                    res.send('Invalid Password');
                }
                else {
                    let payload = { subject: user._id };
                    let token = jwt.sign(payload, 'secretKey');
                    res.status(200).send({token});
                }
        }
    })
})

//request handlersss....

// router.post('/register',(req,res)=>{
//     console.log("register Data is :",req.body);

//     //save to Database of users collection in Ecommerce DB...
//     dbo.collection("users").findOne({username:req.body.username},(err,userObj)=>{
//         if(err)
//         {
//             console.log("Error in Finding User",err);
//         }
//         else if(userObj==null)
//         {
//             //hash password
//             let hashedpassword=bcrypt.hashSync(req.body.password,6);
//             //replacing text to hashed pw
//             req.body.password=hashedpassword
//             dbo.collection("users").insertOne(req.body,(err,success)=>{
//                 if(err)
//                 {
//                     console.log("Error in Save User",err);
//                 }
//                 else{
//                     res.send({message:`User ${req.body.username} is Registered Successfully`});
//                 }
//             })
//         }
//         else{
//             res.send({message:`User ${req.body.username} is Already Existed`});
//         }
//     })

// })

// router.post('/login',(req,res)=>{
//     console.log("Login Object :",req.body);
//     dbo.collection("users").findOne({email:req.body.email},(err,userObj)=>{
//         console.log(userObj)
//         if(err)
//         {
//             console.log("Error in user read",err);
//         }
//         else if(userObj==null)
//         {
//             res.send({message:"Invalid Username"});
//         }
//         else{
//             bcrypt.compare(req.body.password,userObj.password,(error,matched)=>{
//                 if(error){
//                     console.log("error in matching pw",error)
//                 }
//                 else if(matched==false){
//                     res.send({message:"invalid password"})
//                 }
//                 else{
//                     jwt.sign({email:userObj.email},'sshhjj',{expiresIn:60},(err,signedToken)=>{
//                         if(err)
//                         {
//                             console.log("Error in sign",err);
//                         }
//                         else{
//                             res.send({message:`User ${req.body.email} Logged In Successfully`,
//                             token:signedToken,
//                             username:userObj.username
//                         }
//                             );
//                         }
//                     })
//                 }
//             })
//         }
//     })


// })







/* Post employee details to the database...*/
router.post('/create', (req, res) => {
    let userData = {
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        state: req.body.state,
        city: req.body.city
    }


    const User = new user(userData)

    User.save().then(response => {
        // res.status(200).json({ "success": true, message: `${user.name} Created successfully`, "data": response })
        res.status(200).send(response);
    }).catch((error) => {
        // res.json({ "failure": true, "message": "Error in creating user", error })
        res.send(error);

    })
})




/* Post user details to the database...*/
router.post('/post', (req, res) => {

    let userData = {
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        state: req.body.state,
        city: req.body.city
    }

    const user = new user(userData)

    user.save().then(response => {
        // res.status(200).json({ "success": true, message: `${user.name} Created successfully`, "data": response })
        res.status(200).send(response);
    }).catch((error) => {
        // res.json({ "failure": true, "message": "Error in creating user", error })
        res.status(401).send(error);

    })
})

router.get('/all', async (req, res) => {
    let data = await user.find();
    res.send(data);
})

// router.delete('/:id',async(req,res)=>{
//   let id = req.params.id;

//   let data = await user.find
// })

router.get('/searchById', (req, res) => {
    let id = req.query.id;
    user.findById(id, (err, success) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({ status: 200, 'message': "Fechted user Successfully", data: success });
        }

    })
})


router.get('/searchByName', (req, res) => {
    let name = req.query.name;
    user.findOneAndDelete({ name: name }, (err, success) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({ status: 200, data: success });
        }
    })

})

router.put('/:id', async (req, res) => {
    let id = req.params.id;
    let userData = {
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        state: req.body.state,
        city: req.body.city
    }

    let updatedData = await user.findByIdAndUpdate(id, userData, (err, success) => {
        if (err) {
            res.send("Error in Updation");
        }
        else {
            res.send({ 'message': "Updated Successfully", data: success });
        }
    })

    res.send(updatedData);


})

router.delete('/:id', async (req, res) => {
    var id = req.params.id;
    let data = await user.findByIdAndDelete(id, (err, success) => {
        if (err) {
            res.send(err);
        } else {
            res.send({ 'message': "Deleted Successfully", data: success });
        }
    })
    res.send(data);
})


module.exports = router;

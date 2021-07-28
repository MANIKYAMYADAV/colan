var express = require('express');
var router = express.Router();
const loginUser = require('../modals/userLogin');

// const helper = require('../../helpers/CommonHelper')
const jwt = require("jsonwebtoken");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(express.json());

router.post('/login', (req, res) => {
    let userData = req.body;

    loginUser.findOne({ emailId: userData.emailId }, (err, user) => {
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


module.exports = router;

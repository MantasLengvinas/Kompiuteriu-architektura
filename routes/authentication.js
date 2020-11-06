let express = require('express')
let mongoose = require('mongoose')
let jwt = require('jsonwebtoken')

let { jwtkey } = require('../config/keys')
let router = express.Router();
let User = mongoose.model('User');

// router.get('/signup', (req, res) => {
//     res.send('Registracija');
// })

router.post('/signup', async (req, res) => {
    let {username, email, password} = req.body;
    
    try{
        let user = new User({username, email, password});
        await user.save();
        
        let token = jwt.sign({userId:user._id}, jwtkey);
        res.send({token});
    }
    catch(err){
        res.status(422).send(err.message);
    }
})

router.post('/signin', (req, res) => {
    
})

module.exports = router;
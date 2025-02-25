const express = require('express');
const User = require('../models/User');
const router = express.Router();
const {body, validationResult} = require('express-validator');

router.post('/',[
    body('name', 'Enter a valid name').isLength({min: 2}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password should be of atleast 8 Characters').isLength({min: 8})
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user=>res.json(user))
    .catch(err=>{console.log(err)
    res.json({error: 'Please enter a unique email', message: err.message})});    
});

module.exports = router;
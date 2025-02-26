const express = require('express');
const User = require('../models/User');
const router = express.Router();
const {body, validationResult} = require('express-validator');

// POST request for /api/auth/register.
router.post('/register',[
    body('name', 'Enter a valid name').isLength({min: 2}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password should be of atleast 8 Characters').isLength({min: 8})
],  async (req, res) => {
    // If there are errors, return Bad Request and the errors.
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    // Check whether the user with this email exists already.
    try{
        let user = await User.findOne({email: req.body.email});
        if(user) return res.status(400).json({error: 'Sorry a user with this email already exists'});
        // Create a new User
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json(user);
}
catch(error){
    console.error(error.message);
    res.status(500).send('Some error occured');
}
});

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello world from the server router js');
});

module.exports = router;
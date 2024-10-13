const express = require('express');
const router = express.Router();
const {index} = require('./../controllers/index')



router.route('/', index)


module.exports = router;
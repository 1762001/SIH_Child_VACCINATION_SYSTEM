const express = require('express');

const router = express.Router();

const donateController = require ('../middleware/donate');

router.post('/create',donateController.create);

module.exports = router;
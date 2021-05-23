const express = require('express');
const router = express.Router();
const reactController = require('../Controller/react');

router.post('/CreateReact', reactController.postReactForm);

module.exports = router;
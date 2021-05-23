const express = require('express');
const router = express.Router();
const adminReqController = require('../Controller/batch');

// PostBatches

router.post('/CreateDetails', adminReqController.postBatches);

// GetBatches 

router.get('/getDetails', adminReqController.getBatches);

// getTechnology 

router.get('/technology', adminReqController.getTechnology)

// getBatchStatus

router.get('/getBatchStatus', adminReqController.getBatchStatus)

module.exports = router;
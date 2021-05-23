const express = require('express');
const router = express.Router();
const adminReqController = require('../Controller/upload');

// PostExcel

router.post('/file', adminReqController.excelfile);

// GetExcelData

router.get('/getStudents', adminReqController.getuploads)

module.exports = router;
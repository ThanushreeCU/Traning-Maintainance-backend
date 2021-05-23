const express = require('express');
const router = express.Router();
const adminController = require('../Controller/calendar');

//post method

router.post('/CalendarEvent', adminController.postCalendar);

//get method

router.get('/getCalendarEvent', adminController.getCalendar);

module.exports = router;
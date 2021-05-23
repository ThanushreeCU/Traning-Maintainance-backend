const Calendar = require('../Models/calendar');

//post method


exports.postCalendar = (req, res, next) => {
    new Calendar({
        batch: req.body.batch,
        technology: req.body.technology,
        trainer: req.body.trainer,
        fromtodate: req.body.fromtodate,

        // fromdate: req.body.fromdate,
        // todate: req.body.todate,
        fromtime: req.body.fromtime,
        totime: req.body.totime
    }).save().then(data => {
        console.log(data)
        return res.json(data);
    }).catch(err => {
        console.log(err);

    })
}


//get method

exports.getCalendar = (req, res, next) => {
    Calendar.find().then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    });
}
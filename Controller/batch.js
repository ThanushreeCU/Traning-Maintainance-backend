const Batches = require('../Models/batch');

// PostBatches

exports.postBatches = (req, res, next) => {
    new Batches({
        client: req.body.client,
        technology: req.body.technology,
        batchtype: req.body.batchtype,
        fees: req.body.fees,
        costpercandi: req.body.costpercandi,
        location: req.body.location,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        traineetype: req.body.traineetype,
        modeoftrainee: req.body.modeoftrainee,
        progtype: req.body.progtype,
        invoice: req.body.invoice,
        exampleRadios: req.body.exampleRadios,
        onlinetraining: req.body.onlinetraining,
        offlinetraining: req.body.offlinetraining,
        file: req.body.file,
    }).save().then(data => {
        console.log(data)
        res.json(data);

        let xy = new Batches({
            ...data._doc
        })
        const filter = { _id: data._doc._id };
        const update = { batchcode: 'TY_' + data._doc.client + '_' + data._doc._id };

        //below code for finding and updating with custom value
        Batches.findOneAndUpdate(filter, update).then((daa) => {
            console.log('Updated Data ', daa)
        })
    }).catch(err => {
        console.log(err);
    })
}

// GetBatches 

exports.getBatches = (req, res, next) => {
    Batches.find().then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    });
}

// getTechnology 

exports.getTechnology = (req, res, next) => {
    Batches.aggregate([{
        $group: {
            _id: { technology: "$technology" },
            count: { $sum: 1 }
        }
    }, { $match: { count: { "$gte": 1 } } }
    ]).then(data => {
        console.log('technology got', data)
        res.json(data)
    }).catch(err => {
        console.log(err)
    })
}

// exports.getBatchStatus=(req,res,next)=>{
// Batches.find({"startdate" : { $gte : new Date("2020-01-03T00:00:00.000+00:00") }}).then(data=>{
//     res.json(data)
//     console.log("date",data)
// })
// }

// exports.getBatchStatus=(req,res,next)=>{
// Batches.find({"startdate": {$gt:"$startdate", $lt:new Date()}}).then(data=>{
//     res.json(data)
//     console.log("date",data)
// })

// }

// { "$set": { "date": new Date() }}
// { "$currentDate": { "date": { "$type": date }}}


// getBatchStatus

exports.getBatchStatus = (req, res, next) => {
    // let technology = req.params.technology;
    // console.log("get",technology);
    Batches.aggregate([
        // { $match: { technology: "$technology"} },
        {
            $project: {
                technology: 1,
                onGoing: {
                    $cond: [{
                        $and: [{ $lt: ["$startdate", new Date()] },
                        { $gt: ["$enddate", new Date()] }]
                    }, 1, 0]
                },
                // onGoing:{
                //     $cond:[{ $range: [ 1,30] },1,0]
                // },
                yetToStart: {
                    $cond: [{ $gt: ["$startdate", new Date()] }, 1, 0]
                },
                completed: {
                    $cond: [{ $lt: ["$enddate", new Date()] }, 1, 0]
                }

            }
        },
        {
            $group: {
                _id:  "$technology" ,
                onGoingCount: { $sum: "$onGoing" },
                yetToStartCount: { $sum: "$yetToStart" },
                completedCount: { $sum: "$completed" }
            },
        }
    ])
        .then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => {
            console.log(err);
        })
}
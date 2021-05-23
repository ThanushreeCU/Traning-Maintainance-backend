const React = require('../Models/react');

exports.postReactForm = (req, res, next) => {
    new React({
        fullName: req.body.fullName,
        degree: req.body.degree,
        stack: req.body.stack,
    }).save().then(data => {
        console.log(data)
        return res.json(data);
    }).catch(err => {
        console.log(err);

    })

}

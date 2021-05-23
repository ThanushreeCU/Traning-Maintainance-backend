const upload = require('../Models/upload');
const Batches = require('../Models/batch');
const multer = require('multer');
const xlsx = require("xlsx")

// Excel 

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads')
    },
    filename: (req, file, callBack) => {
        callBack(null, `${file.originalname}`)
    }
})
const upload1 = multer({ storage: storage })

// PostExcel

exports.excelfile = ('/file', upload1.single('file'), (req, res, next) => {
    const file = req.file
    console.log(file);
    res.send(file);
    var wb = xlsx.readFile("uploads/demo2.xlsx")
    var ws = wb.Sheets["Sheet1"];
    var data = xlsx.utils.sheet_to_json(ws);
    console.log(JSON.stringify(data));
    upload.insertMany(data).then(result => {
        console.log(result)
    }).catch(err => {
        console.log(err)
    })
})

// GetExcelData

exports.getuploads = (req, res, next) => {
    upload.find().then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    });
}


// exports.postStudentsDetails = (req, res, next) =>
//  { 
//      let client = req.body.client
//     console.log(client); 
//     Batches.find({ "client": client }).then(Details => 
//        { console.log(Details[0].batchcode);
//          let batchcode = Details[0].batchcode       
//             if (studentDetails.length > 0) 
//             { 
//                 new upload({
//                     batchcode: batchcode, 
//                }).save().then(studentDetails =>
//                 { res.json(studentDetails); 
//                 }).catch(err => 
//                     { console.log(err); }); 
//                 }
//                  else { res.json({ msg: "Client Does not Exists" }); } 
//                }).catch(err => { console.log(err); })}
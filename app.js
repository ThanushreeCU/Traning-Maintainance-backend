const express = require('express');
const multer = require('multer');
const app = express();
const cors = require('cors')
const xlsx = require("xlsx")

const batchesRoutes = require('./Routes/batch');
const calendarRoutes = require('./Routes/calendar');
const reactRoutes = require('./Routes/react');
const uploadRoutes = require('./Routes/upload');
const uploadSchema = require('./Models/upload');

const bodyParser = require('body-parser');
const mongoose = require('mongoose')
let mongodbURI = "mongodb://localhost:27017/myProject";
app.use(cors());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(batchesRoutes);
app.use(calendarRoutes);
app.use(reactRoutes);
app.use(uploadRoutes)

// const storage = multer.diskStorage({
//     destination: (req, file, callBack) => {
//         callBack(null, 'uploads')
//     },
//     filename: (req, file, callBack) => {
//         callBack(null, `${file.originalname}`)
//     }
//   })

//Upload_Excel_File
// const upload = multer({ storage: storage })

// app.post('/file', upload.single('file'), (req, res, next) => {
//     const file = req.file;
//     console.log(file);
//     res.send(file);
//         var wb=xlsx.readFile("uploads/demo2.xlsx")
//     var ws=wb.Sheets["Sheet1"];
//     var data=xlsx.utils.sheet_to_json(ws);
//     console.log(JSON.stringify(data));
//     uploadSchema.insertMany(data).then(result=>{
//         console.log(result)
//     }).catch(err=>{
//         console.log(err)
//     })
// })



mongoose.connect(mongodbURI, { useNewUrlParser: true }).then(res => {

  console.log("mongodb connected successfully");
  app.listen(4000)
  console.log("app is listening to port number 4000");

}).catch(err => {
  console.log(err);
});



const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let reactSchema=new Schema({
    fullName:{
        type:String
    },
    degree:{
        type:String
    },
    stack:{
        type:String
    },
    // fromdate:{
    //     type:Date
    // },
    // todate:{
    //     type:Date
    // },

   
})
module.exports=mongoose.model('React',reactSchema);
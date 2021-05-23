const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let reqSchema=new Schema({
    batch:{
        type:String
    },
    technology:{
        type:String
    },
    trainer:{
        type:String
    },
    // fromdate:{
    //     type:Date
    // },
    // todate:{
    //     type:Date
    // },

    fromtodate:{
        type:Array,
    },

    fromtime:{
        type:String
    },
    totime:{
        type:String
    }
})
module.exports=mongoose.model('Calendar',reqSchema);
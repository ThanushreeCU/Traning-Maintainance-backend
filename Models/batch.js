const mongoose=require('mongoose');
const Schema=mongoose.Schema;
autoIncrement = require('mongoose-auto-increment');

let reqSchema=new Schema({
    batchcode:{
        type:String
    },
    client:{
        type:String
    },
    technology:{
        type:String
    },
    batchtype:{
        type:String
    },
    fees:{
        type:Number
    },
    costpercandi:{
        type:Number
    },
    location:{
        type:String
    },
    startdate:{
        type:Date
    },
    enddate:{
        type:Date
    },
    traineetype:{
        type:String
    },
    modeoftrainee:{
        type:String
    },
    progtype:{
        type:String
    },
    invoice:{
        type:Date
    },
    exampleRadios:{
        type:String
    },
    onlinetraining:{
        type:String
    },
    offlinetraining:{
        type:String
    },
    file:{
        type:String
    }
   
})

autoIncrement.initialize(mongoose.connection); // 3. initialize autoIncrement 

reqSchema.plugin(autoIncrement.plugin, 'reqSchema'); // 4. use autoIncrement

module.exports=mongoose.model('Batches',reqSchema);
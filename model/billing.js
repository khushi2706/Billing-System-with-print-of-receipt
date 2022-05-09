const { default: mongoose } = require("mongoose");

//mongoose = require("mongoose");

// Amount, Full Name, Date, Time,
// Items/Particulars Description, Phone, Email,
const billSchema = new mongoose.Schema({

    fullName: {
        type : String,
        require:true,
    },
    ItemDesc:{
        type : String,
        require:true,
    },
    Amount: {
        type : Number,
        require:true,
    },  
    Email : {
        type: String,
        required:true,
    },
    PhnNo:{
        type: Number,
        required: true,
    },
    DateTime:{
        type:Date,
        required:true,
        default: () => Date.now()
    },
})

module.exports = mongoose.model("BillTable" , billSchema);

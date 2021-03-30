const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.user}:${process.env.password}@${process.env.server}/${process.env.database}`,{useNewUrlParser: true ,useUnifiedTopology: true }).then();

const CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required:true,
        unique:true
    }
});

module.exports = mongoose.model('Customer',CustomerSchema);
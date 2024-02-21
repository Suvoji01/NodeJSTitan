// models/courtroomModel.js
const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
  // Define your case schema fields here
});

const Case = mongoose.model('Case', caseSchema);
module.exports = Case;

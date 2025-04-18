const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  user:     { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  checkIn:  { type: Date, required: true },
  checkOut: { type: Date, default: null }
});

module.exports = mongoose.model('Attendance', AttendanceSchema);

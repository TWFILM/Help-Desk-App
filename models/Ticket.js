const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  title: {
    type: String,
    required: [true, 'Please add a title'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
  product: {
    type: String,
    enum: ['iPhone', 'Macbook', 'iMac', 'iPad'],
    required: true
  },
  status: {
    type: String,
    enum: ['new', 'open', 'closed'],
    default: 'new'
  }
}, { timestamps: true });

module.exports = mongoose.model('Ticket', ticketSchema);

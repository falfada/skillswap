const { Schema, model } = require('mongoose');

const calendarEventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  location: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Calendar = model('CalendarEvent', calendarEventSchema);

module.exports = Calendar;

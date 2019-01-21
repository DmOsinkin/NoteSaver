let mongoose = require('mongoose');

let NoteSchema = new mongoose.Schema({
    title: String,
    property: String,
    end_date: { type: Date }
});

module.exports = mongoose.model('Note', NoteSchema);

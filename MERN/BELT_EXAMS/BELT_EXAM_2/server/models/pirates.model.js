const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({

    name: { 
        type: String,
        minLength: [5, 'Name should be at least 5 characters'],
        maxLength: [30, 'Name should not be more than 30 characters'],
        required: [true, 'Pirate Name is required']
    },
    imageUrl: { 
        type: String,
        required: [true, 'Image Url is required']
    },
    treasureChests: {
        type: Number,
        default: 0
    },
    catchPhrase: { 
        type: String,
        minLength: [5, 'Catch Pharase should be at least 5 characters'],
        required: [true, 'Catch Phrase is required']
    },
    crewPosition: { 
        type: String, 
        enum: ['Sailor', 'Captain', 'Firstmate'],
        default: 'Sailor'
    },
    pegleg: {
        type: Boolean,
        default: true
    },
    eyepatch: {
        type: Boolean,
        default: true
    },
    hookhand: {
        type: Boolean,
        default: true
    }

}, { timestamps: true });

module.exports = mongoose.model('Pirate', PirateSchema);



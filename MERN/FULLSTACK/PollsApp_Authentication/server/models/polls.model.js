const mongoose = require('mongoose');

const Poll = new mongoose.Schema({

    question: { 
        type: String,
        minLength: [10, 'The question must be more than 10 characters'],
        required: [true, 'The question is required']
    },
    option1: { 
        type: String,
        required: [true, 'The first option is required']
    },
    option2: { 
        type: String,
        required: [true, 'The second option is required']
    },
    option3: { 
        type: String,
    },
    option4: { 
        type: String,
    },
    option1Votes: {
        type: Number,
        default: 0
    },
    option2Votes: {
        type: Number,
        default: 0
    },
    option3Votes: {
        type: Number,
        default: 0
    },
    option4Votes: {
        type: Number,
        default: 0
    },
    votesCount: {
        type: Number,
        default: 0
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },

}, { timestamps: true });

module.exports = mongoose.model('Poll', Poll);



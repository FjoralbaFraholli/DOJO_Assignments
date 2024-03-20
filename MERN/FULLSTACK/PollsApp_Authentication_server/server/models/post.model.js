const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({

    title: {
        type: String,
        minLength: [5, 'Title should be at least 5 characters'],
        maxLength: [50, 'Title should not be more than 30 characters'],
        required: [true, 'Title is required']
    },
    picture: { 
        type: String,
        required: [true, 'Picture is required']
    },
    description: {
        type: String,
        minLength: [3, 'Description should be at least 3 characters'],
        required: [true, 'Description is required']
    },
    link: {
        type: String,
        required: [true, 'Link of the trail is required']
    },
    altitude: {
        type: String,
        minLength: [5, 'Title should be at least 5 characters'],
        maxLength: [50, 'Title should not be more than 30 characters'],
        required: [true, 'Title is required']
    },
    hikingHours: {
        type: Number,
        default: 0,
        minimum: 0,
        required: [true, 'Title is required']
    },
    hikingMinutes: {
        type: Number,
        minimum: 0,
        maximum: 59,
        default: 0,
        required: [true, 'Title is required']
    },
    difficulty: {
        type: String, 
        enum: ['Easy', 'Medium', 'Hard'],
        default: 'Easy'
    }

}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);



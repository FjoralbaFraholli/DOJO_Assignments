const Poll = require('../models/polls.model');
 
module.exports.getAllPolls = (req, res) => {
    Poll.find().sort({createdAt: 1})
        .then((allPolls) => {
            res.json({ polls: allPolls })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.getTopThreePolls = (req, res) => {
    Poll.find().sort({votesCount: -1}).limit(3)
        .then((allPolls) => {
            res.json({ polls: allPolls })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
module.exports.getOnePoll = (req, res) => {
    Poll.findOne({ _id: req.params.id })
        .then(onePoll => {
            res.json({ poll: onePoll })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.createPoll = (req, res) => {
    Poll.create(req.body)
        .then(newlyCreatedPoll => {
            res.json({ poll: newlyCreatedPoll })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.getOnePollAndUpdate = (req, res) => {
    Poll.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    )
        .then(updatedPoll => {
            res.json({ poll: updatedPoll })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.deletePoll = (req, res) => {
    Poll.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.getOnePollAndReview = (req, res) => {
    Poll.findOneAndUpdate(
        { _id: req.params.id},
        { $push: {reviews:req.body}},
        { new: true}
    )
        .then(updatedPoll => {
            res.json({poll: updatedPoll})
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });}

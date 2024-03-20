const Pirate = require('../models/pirates.model');
 
module.exports.getAllPirates = (req, res) => {
    Pirate.find()
        .then((allPirates) => {
            res.json({ pirates: allPirates })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
module.exports.getOnePirate = (req, res) => {
    Pirate.findOne({ _id: req.params.id })
        .then(onePirate => {
            res.json({ pirate: onePirate })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.createPirate = (req, res) => {
    Pirate.create(req.body) 
        .then(newlyCreatedPirate => {
            res.json({ pirate: newlyCreatedPirate })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.getOnePirateAndUpdate = (req, res) => {
    Pirate.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    )
        .then(updatedPirate => {
            res.json({ pirate: updatedPirate })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });}

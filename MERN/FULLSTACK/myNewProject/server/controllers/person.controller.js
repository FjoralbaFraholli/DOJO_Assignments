const Person = require('../models/person.model');    /* this is new */
module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}
          /* The method below is new */
module.exports.createPerson = (req, res) => {

    Person.create(req.body) //This will use whatever the body of the client's request sends over
        .then(person => res.json(person))
        .catch(err => res.json(err));
}


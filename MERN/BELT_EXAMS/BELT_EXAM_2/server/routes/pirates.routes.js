const PirateController = require('../controllers/pirates.controller'); 

module.exports = (app) => {
    app.get('/api/pirates', PirateController.getAllPirates);
    app.post('/api/pirate', PirateController.createPirate);
    app.get('/api/pirate/:id', PirateController.getOnePirate);
    app.put('/api/pirate/:id', PirateController.getOnePirateAndUpdate);
    app.delete('/api/pirate/:id', PirateController.deletePirate);
}

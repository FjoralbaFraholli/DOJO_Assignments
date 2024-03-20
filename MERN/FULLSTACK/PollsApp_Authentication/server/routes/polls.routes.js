const PollController = require('../controllers/polls.controller'); 
const {authenticate} = require('../config/jwt.config');

module.exports = (app) => {
    app.get('/api/polls', authenticate, PollController.getAllPolls);
    app.get('/api/polls/top3', authenticate, PollController.getTopThreePolls);
    app.post('/api/poll', authenticate, PollController.createPoll);
    app.get('/api/poll/:id', authenticate, PollController.getOnePoll);
    app.put('/api/poll/:id', authenticate, PollController.getOnePollAndUpdate);
    // app.delete('/api/poll/:id', authenticate, PollController.deletePoll);
    // app.patch('/api/poll/review/:id', authenticate, PollController.getOnePollAndReview);
}


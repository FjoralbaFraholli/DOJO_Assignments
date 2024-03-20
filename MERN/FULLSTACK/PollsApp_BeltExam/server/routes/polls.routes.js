const PollController = require('../controllers/polls.controller'); 

module.exports = (app) => {
    app.get('/api/polls', PollController.getAllPolls);
    app.get('/api/polls/top3', PollController.getTopThreePolls);
    app.post('/api/poll', PollController.createPoll);
    app.get('/api/poll/:id', PollController.getOnePoll);
    app.put('/api/poll/:id', PollController.getOnePollAndUpdate);
    app.delete('/api/poll/:id', PollController.deletePoll);
    app.patch('/api/poll/review/:id', PollController.getOnePollAndReview);
}


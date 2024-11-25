const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { PORT } = require('./config/serverConfig');
// const { sendBasicEmail } = require('./services/email-service');

// const cron = require('node-cron');
const jobs = require('./utils/job');

const TicketController = require('./controllers/ticket-controller');
const EmailService = require('./services/email-service');

const { createChannel, subscribeMessage } = require('./utils/messageQueue');
const { REMINDER_BINDING_KEY } = require('./config/serverConfig');

const setupAndStartServer = async () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/api/v1/tickets', TicketController.create);

    const channel = await createChannel();
    subscribeMessage(channel, EmailService.subscribeEvents, REMINDER_BINDING_KEY);

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
        // jobs();
        // sendBasicEmail(
        //         'support@admin.com',
        //         'ganeshguvvala4@gmail.com',
        //         'This is the testing email',
        //         'Hiii, how are you?, I hope you like the service'
        // );

        // cron.schedule('*/1 * * * *', () => {
        //     console.log('running a task for every 1 minute');
        // });
    })
}

setupAndStartServer();
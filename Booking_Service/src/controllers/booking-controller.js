const { StatusCodes } = require('http-status-codes');

const { BookingService } = require('../services/index');

const { createChannel, publishMessage } = require('../utils/messageQueue');
const { REMINDER_BINDING_KEY } = require('../config/serverConfig');

const bookingService = new BookingService();

class BookingController {

    constructor() {
    }

    async sendMessageToQueue(req, res) {
        const channel = await createChannel();
        const payload = {
            data: {
                subject: 'This is notification from queue',
                content: 'Some queue will subscribe',
                recepientEmail: 'cse@gmail.com',
                notificationTime: '2024-03-04T07:54:00'
            },
            service: 'CREATE_TICKET' 
        };
        publishMessage(channel, REMINDER_BINDING_KEY, JSON.stringify(payload));
        return res.status(200).json({
            message: 'Successfully published the event'
        });
    }

    async create(req, res) {
        try {
            const response = await bookingService.createBooking(req.body);
            return res.status(StatusCodes.OK).json({
                message: 'Successfully your booking completed',
                success: true,
                data: response,
                err: {}
            })
        } catch (error) {
            return res.status(error.statusCode).json({
                message: error.message,
                err: error.explanation,
                success: false,
                data: {}
            });
        }
    }
}

module.exports = BookingController
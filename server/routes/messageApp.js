const express = require('express');
const router = express.Router();

// controller modules

const thread_controller = require('../controllers/threadController');
const message_controller = require('../controllers/messageController');

// GET ALL THREADS
router.get('/app', thread_controller.getAll);

// GET ONE THREAD
router.get('/app/:id', thread_controller.getOne);

// POST NEW THREAD
router.post('/app', thread_controller.create);

// DELETE THREAD
router.delete('/app', thread_controller.delete);

// POST NEW MESSAGE
router.post('/app/:id', message_controller.sendMessage);

// settings stuff?

module.exports = router;

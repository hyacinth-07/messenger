const express = require('express');
const router = express.Router();

// controller modules

const thread_controller = require('../controllers/threadController');

// GET ALL THREADS
router.get('/app', thread_controller.getAll);

// GET ONE THREAD
router.get('/app/:id', thread_controller.getOne);

// POST NEW THREAD
router.post('/app', thread_controller.create);

// DELETE THREAD
router.delete('/app', thread_controller.delete);

// POST NEW MESSAGE
router.post('/app/:id', (req, res) => {
	res.send('post new comment in thread');
});

// settings stuff?

module.exports = router;

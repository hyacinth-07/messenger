const express = require('express');
const router = express.Router();

// controller modules

const thread_controller = require('../controllers/threadController');

// GET ALL THREADS

router.get('/app', (req, res) => {
	res.send('get all threads');
});

// DELETE THREAD

router.delete('/app/:id/delete', (req, res) => {
	res.send(`delete selected thread`);
});

// POST NEW THREAD

router.post('/app', thread_controller.create);

// GET ALL MESSAGES FROM SINGLE THREAD

router.get('/app/:id', (req, res) => {
	res.send('get all comments from selected thread');
});

// POST NEW MESSAGE

router.post('/app/:id', (req, res) => {
	res.send('post new comment in thread');
});

// settings stuff?

module.exports = router;

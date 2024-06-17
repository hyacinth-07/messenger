const Thread = require('../models/thread');

// create new thread

exports.create = async (req, res) => {
	// misses validation and sanitization

	const { title, comments } = req.body;

	try {
		const thread = await Thread.create({ title, comments });
		res.status(201).json(thread);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// get all threads

exports.getAll = async (req, res) => {
	try {
		const threads = await Thread.find();
		res.status(200).json(threads);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// delete thread

exports.delete = async (req, res) => {
	// misses validation and sanitization

	try {
		await Thread.findByIdAndDelete(req.body.id);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

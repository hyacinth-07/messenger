const Thread = require('../models/thread');

// get all threads

exports.getAll = async (req, res) => {
	try {
		const threads = await Thread.find();
		res.status(200).json(threads);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// create new thread

exports.create = async (req, res) => {
	const { title, comments } = req.body;

	try {
		const thread = await Thread.create({ title, comments });
		res.status(201).json(thread);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// delete thread

exports.delete = async (req, res) => {
	// misses validation and sanitization

	const { id } = req.body;

	try {
		const deletedThread = await Thread.findByIdAndDelete(id);
		res.status(200).json(deletedThread);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// get single thread

exports.getOne = async (req, res) => {
	// miss validation and sanitization

	const id = req.params.id;

	try {
		const thread = await Thread.findById(id).exec();
		res.status(200).json(thread.comments);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

const Thread = require('../models/thread');

exports.create = async (req, res) => {
	// misses validation and sanitization

	const { title, comments } = req.body;

	try {
		const thread = await Thread.create({ title, comments });
		res.status(200).json(thread);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

const Thread = require('../models/thread');

exports.sendMessage = async (req, res) => {
	// miss validation and sanitization

	const id = req.params.id;

	const newComment = {
		id: '',
		body: req.body.body,
		postId: '',
		likes: req.body.likes,
		user: {
			id: '',
			username: req.body.user,
			fullName: req.body.user,
		},
	};

	try {
		const thread = await Thread.findById(id).exec();
		thread.comments[0].push(newComment);
		await thread.save();
		res.status(200).json(thread);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

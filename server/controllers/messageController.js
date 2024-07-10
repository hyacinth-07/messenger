const Thread = require('../models/thread');
const Comment = require('../models/comment');

exports.sendMessage = async (req, res) => {
	// miss validation and sanitization

	const id = req.params.id;

	const comment = new Comment({
		id: '',
		body: req.body.body,
		postId: '',
		likes: req.body.likes,
		user: {
			id: '',
			username: req.body.user,
			fullName: req.body.user,
		},
	});

	try {
		const thread = await Thread.findById(id).exec();
		thread.comments[0].push(comment);
		await thread.save();
		res.status(200).json(thread);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

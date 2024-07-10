const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = Schema(
	{
		id: { type: Number },
		body: { type: String, required: true },
		postId: { type: Number },
		likes: { type: Number },
		user: {
			id: { type: Number },
			username: { type: String, required: true },
			fullName: { type: String },
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Comment', CommentSchema);

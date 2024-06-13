const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = Schema(
	{
		text: { type: String, required: true, maxLength: 540 },
		user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Comment', CommentSchema);

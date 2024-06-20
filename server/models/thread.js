const mongoose = require('mongoose');
const { DateTime } = require('luxon');
const { Schema } = mongoose;

const ThreadSchema = Schema(
	{
		title: { type: String, required: true, maxLength: 180 },
		comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
	},
	{ timestamps: true }
);

ThreadSchema.virtual('url').get(function () {
	return `/app/${this._id}`;
});

module.exports = mongoose.model('Thread', ThreadSchema);

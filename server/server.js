const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const mongoDB = process.env.MONGO_URI;

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
	res.send('Hello, this is the server');
});

// connect to db

connect();

async function connect() {
	try {
		await mongoose.connect(mongoDB);
		console.log('Connected to DB');
	} catch (err) {
		console.log(`Could not connect: ${err}`);
	}
}

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

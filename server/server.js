const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const mongoDB = process.env.MONGO_URI;

const app = express();
const port = process.env.PORT;

const routes = require('./routes/messageApp');

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

// middleware

app.use(express.json());
app.use(express.urlencoded());

// routes

app.use(routes);

// listen

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

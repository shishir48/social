const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	thought: {
		type: String,
		required: true,
	},
})

const Wall = mongoose.model("Wall", userSchema)

module.exports = Wall

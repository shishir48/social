const Wall = require("../models/wall")
const express = require("express")
const router = new express.Router()

router.post("/create", async (req, res) => {
	try {
		const w = new Wall(req.body)
		await w.save()
		res.status(201).send(w)
	} catch (e) {
		res.status(400).send()
	}
})

router.get("/getWall", async (req, res) => {
	try {
		const data = await Wall.find({})
		res.status(200).send(data)
	} catch (e) {
		res.status(400).send()
	}
})

module.exports = router

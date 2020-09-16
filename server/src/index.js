const express = require("express")
const socialRouter = require('./routers/wall')
require('./database/mongoose')
const cors = require('cors')
const Wall = require('./models/wall')


const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use(socialRouter)

// const yo = new Wall({
//   name:'shishir',
//   thoughts:'asjdaskda'
// })
// yo.save()

app.listen(port, () => {
	console.log("port is up on 5000")
})


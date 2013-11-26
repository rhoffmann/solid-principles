express = require "express"
app = express()

app.use express.static __dirname

app.get "/api/promised.json", (req, res) ->

  responseJSON =
    id : 123
    user : "richard"

  res.json(responseJSON)

port = process.env.PORT || 3000

app.listen port
console.log "listening on port #{port}"
const express = require('express')
const app = express()
const port = 8080
var fibUtils = require("./fibUtils");

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/:number", function (req, res) {
  res.send( fibUtils.fibonacci( req.params.number ) )
});

app.get('/', (req, res) => res.send('Hello World! GET with "/<number>" for a fibonacci sequence'))

app.listen(port, () => console.log(`Fibonacci app listening on port ${port}!`))

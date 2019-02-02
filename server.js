const express = require('express')
const app = express()
const port = 8080
var fibUtils = require("./fibUtils");
var bodyParser = require('body-parser')

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// parse application/json
app.use(bodyParser.json())

app.post("/fib", function (request, response) {
  const num = request.body.number;
  const result = fibUtils.fibonacci(num)
  response.send(result)
});

app.get('/', (req, res) => res.send('Hello World! Post to /fib with {"number":10} for a fibonacci sequence'))

app.listen(port, () => console.log(`Fibonacci app listening on port ${port}!`))

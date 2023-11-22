const express = require('express');
const app = express();
let PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static('server/public'));

// Global variable that will contain all of the
// calculation objects:
let calculations = [];

let result;
// Here's a wonderful place to make some routes:

// GET /calculations
app.get('/calculations', (req, res) => {
  console.log('GET /calculations received a request!');
  console.log('req.body', req.body);
  res.send(calculations);
})

// POST /calculations
app.post('/calculations', (req, res) => {
  let calculatorStuff = req.body;
  console.log('calculatorStuff', calculatorStuff);
  doMath(calculatorStuff);
  res.sendStatus(201);
})

function doMath(calculationToSolve) {
  let operator = calculationToSolve.operator;
  let numOne = Number(calculationToSolve.numOne);
  let numTwo = Number(calculationToSolve.numTwo);
  let result;
  switch (operator) {
    case '+':
      result = numOne + numTwo;
      break;
    case '-':
      result = numOne - numTwo;
      break;
    case '*':
      result = numOne * numTwo;
      break;
    case '/':
      result = numOne / numTwo;
      break;
    default:
      res.sendStatus(400)
      break;
  }
  let calculation = { numOne: numOne, numTwo: numTwo, operator: operator, result: result };
  calculations.push(calculation);

  return result;
}
console.log(calculations);


// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 5001;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;

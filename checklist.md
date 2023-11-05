-- CLIENT SIDE --
* Display all previous calculations
* Display most recent calculation result
X Eack mathematical operator is represented by a button
* When a button is clicked send a POST request to the server (client.js)
* When the = button is clicked, capture the input values and operator, then send this data to POST '/calculations'
* The C button clears inputs


-- SERVER SIDE --
* Create a POST '/calculations route that will "do the math" and obtain the correct result value. It must be able to handle addition, subtraction, multiplication, and division.
For example, if the POST route receives this data:
{ numOne: 25, numTwo: 10, operator: '+' } It should "do the math," then push this object into the server-side calculations array: { numOne: 25, numTwo: 10, operator: '+', result: 35 }
After this successful calculation, the POST route must send status 201 back to the client.
* 
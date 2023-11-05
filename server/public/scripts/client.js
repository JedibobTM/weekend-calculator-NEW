function onReady() {
    console.log("Hello World");

}

let numberOne = document.getElementById('first-number').value;
let numberTwo = document.getElementById('second-number').value;
let plus = document.getElementById('add').value;
let minus = document.getElementById('subtract').value;
let times = document.getElementById('multiply').value;
let dividedBy = document.getElementById('divide').value;

function handleSubmit(event) {
    console.log('Handling Submit');
    event.preventDefault();
}

function buttonOnClick(event) {
    console.log('Operator test');
    event.preventDefault();
}

function getEquation(event) {
    let numbers = {numberOne: numberOne, 
        numberTwo: numberTwo, 
        plus: plus, 
        minus: minus,
        times: times,
        dividedBy: dividedBy}

    axios({
        method: 'POST',
        url: '/calculations',
        data: numbers
    })
}



onReady()
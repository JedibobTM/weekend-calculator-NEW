function onReady() {
    console.log("Hello World");
}
let globalOperator;

function getCalculations() {
    console.log('getting operator');

    axios({
        url: '/calculations',
        method: 'GET',
    }).then((response) => {
        console.log('response.data', response.data);
        let calculations = response.data;
        console.log(calculations, 'ARE THE CALCS');
        render(calculations);
    })
}

function setOperator(event, operator) {
    event.preventDefault();
    globalOperator = operator;
}


function handleSubmit(event) {
    event.preventDefault();
    console.log("handling submit");
    let firstNumber = document.getElementById("first-number").value;
    let secondNumber = document.getElementById("second-number").value;
    axios ({
        url: '/calculations',
        method: 'POST',
        data: { numOne: firstNumber, numTwo: secondNumber, operator: globalOperator }
    }).then((response) => {
        getCalculations();
    })
}

function render(calculations) {
    let resultHistory = document.getElementById('result-history');
    console.log('resultHistory', resultHistory);
    let recentAnswer = document.getElementById('recent-result');
    console.log('recentAnswer', recentAnswer)
    
    let mostRecentResult = calculations[calculations.length - 1].result
    recentAnswer.innerHTML = '';
    recentAnswer.innerHTML += `
        <h2>${mostRecentResult}</h2>
    `
    console.log('recentAnswer', recentAnswer)

    resultHistory.innerHTML = '';
    for (number of calculations) {
        resultHistory.innerHTML += `
            <li>${number.numOne} ${number.operator} ${number.numTwo} = ${number.result}</li>
        `
    }
}

getCalculations();
onReady()
let numbers = [];


function getArray() {
    let input = document.getElementById('arrayInput').value;

    numbers = input.split(',')
        .map(num => parseFloat(num.trim()))
        .filter(num => !isNaN(num));
}

function showArray() {
    getArray();
    if (numbers.length) {
        document.getElementById('result').innerText = `Array: [${numbers.join(', ')}]`;
    } else {
        document.getElementById('result').innerText = 'Invalid Input! Please enter numbers.';
    }
}


function calculateAverage() {
    getArray();
    if (numbers.length) {
        let avg = numbers.reduce((a, b) => a + b, 0) / numbers.length;
        document.getElementById('result').innerText = `Average: ${avg.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Invalid Input! Please enter numbers.';
    }
}

function findMax() {
    getArray();
    if (numbers.length) {
        let max = Math.max(...numbers);
        document.getElementById('result').innerText = `Maximum: ${max}`;
    } else {
        document.getElementById('result').innerText = 'Invalid Input! Please enter numbers.';
    }
}


function findMin() {
    getArray();
    if (numbers.length) {
        let min = Math.min(...numbers);
        document.getElementById('result').innerText = `Minimum: ${min}`;
    } else {
        document.getElementById('result').innerText = 'Invalid Input! Please enter numbers.';
    }
}
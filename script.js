let numbers = [];

        function getArray() {
            let input = document.getElementById('arrayInput').value;
            numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
        }

        function showArray() {
            getArray();
            document.getElementById('result').innerText = numbers.length ? `Array: [${numbers.join(', ')}]` : 'Invalid Input';
        }

        function calculateAverage() {
            getArray();
            let avg = numbers.reduce((a, b) => a + b, 0) / numbers.length;
            document.getElementById('result').innerText = numbers.length ? `Average: ${avg.toFixed(2)}` : 'Invalid Input';
        }

        function findMax() {
            getArray();
            let max = Math.max(...numbers);
            document.getElementById('result').innerText = numbers.length ? `Maximum: ${max}` : 'Invalid Input';
        }

        function findMin() {
            getArray();
            let min = Math.min(...numbers);
            document.getElementById('result').innerText = numbers.length ? `Minimum: ${min}` : 'Invalid Input';
        }
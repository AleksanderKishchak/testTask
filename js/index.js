const numbers = document.getElementsByClassName('numbers')[0];
const inputs = document.getElementsByClassName('number');
const userNumbersBlock = document.querySelector('#user-numbers span');
const minNumberBlock = document.querySelector('#min-number span');
const maxNumberBlock = document.querySelector('#max-number span');
const sumBlock = document.querySelector('#sum span');


numbers.addEventListener('input', (e) => {
	const arrOfNumbers = [];
	
	for(let i = 0; i < inputs.length; i++) {
		if(inputs[i].value !== '') {
			arrOfNumbers.push(parseFloat(inputs[i].value));
		}
	}
	
	const results = calculate(arrOfNumbers);
	showResults(results);
});

function calculate(arrOfNumbers) {
	const max = Math.max(...arrOfNumbers);
	const min = Math.min(...arrOfNumbers);
	const sum = arrOfNumbers.reduce((a, b) =>  {
		return a + b;	
	});
	
	return {
		max,
		min,
		sum,
		userNumbers: arrOfNumbers
	}
}

function showResults({max, min, sum, userNumbers}) {
	userNumbersBlock.innerHTML = userNumbers;
	minNumberBlock.innerHTML = min;
	maxNumberBlock.innerHTML = max;
	sumBlock.innerHTML = sum;
}

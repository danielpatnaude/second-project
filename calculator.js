class Calculator {
	static add(a, b) {
		return a + b;	
	}

	static subtract(a, b) {
		return a - b;
	}	

	static multiply(a, b) {
		return a * b;
	}	

	static divide(a, b) {
		return a / b;
	}	
}

var product = Calculator.add(2, 9);
console.log(product === 12);

var subtraction = Calculator.subtract(20, 7);
console.log(subtraction); 


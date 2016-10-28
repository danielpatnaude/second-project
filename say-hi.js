class Helper {
	static sayHi(person) {
		return 'hello to you ' + person;
	}

	static sayBye(person) {
		return 'see you later ' + person;
	}	

	static shout(word) {
		return word.toUpperCase() + '!!!';
	}

	static sayGoodnight(person) {
		return 'night player ' + person; 
	}
}
console.log( Helper.sayGoodnight('Max') ) 
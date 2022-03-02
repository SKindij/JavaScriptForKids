//deal with functions (розбираємося із функціями)
var myFirstFunction = function () {
	console.log('Hello world');
};

// add an argument to the function (додаємо аргумент до функції)
var sayHelloTo = function (Svin) {
	console.log('Hello ' + Svin + "!");
}; 
//then instead of a pig we write what we want to see in the greeting (далі замість свина пишемо шо хочемо побачити в привітанні)
sayHelloTo("Tatko");

var drawCats = function (howManyTimes) { 
	for (var i = 0; i < howManyTimes; i++) {
		console.log(i + " =^.^=");
	}
};
//then write how many times we want this function (потім пишемо скільки разів хочемо дану функцію) drawCats(x>0)
drawCats(5);

//a function can have several arguments (variables) (у функції може бути декілька аргументів(змінних))
var blabla = function (Svin, Makaka) {
	console.log('My first argument was: ' + Svin);
	console.log('My second argument was ' + Makaka);
}

//return the value (повертаю значення)
var multiply = function (number) {
	return number * 3
};
//then enter the desired digit (number) in parentheses (потім вводимо в дужках потрібну цифру(число))
multiply(5) + multiply(2);
multiply( multiply(4) );

//simplify the code (спрощуємо код)
var pickRandomWord = function (words) {
	return words[Math.floor(Math.random() * words.length)];
};
var randomWords = ['Svin', 'Makaka', 'Pig', 'Panda'];
pickRandomWord(randomWords);

//I write a phrase generator in a cool way (пишу генератор фраз крутішим способом)
generateRandomGood = function () {
	var GoodWords = ['tasty', 'majestic', 'delicious', 'disgusting'];
	var countries = ['Mexican', 'Italian', 'Englih', 'American', 'Japan'];
	var meals = ['Pizza', 'Burger' , 'Tea', 'Fish', 'Burito', 'Pidcherevina']
	//robim sentence
	var randomSentence = 'My dear geast, I want to advise you this ' + pickRandomWord(GoodWords) + ' ' + pickRandomWord(countries) + ' ' + pickRandomWord(meals) + '!';
	return randomSentence;
};
generateRandomGood();

var fourthLetter = function (name) {
	if (name.length < 4) {
		return;
	}
	return 'The fourth letter of your name is ' + name[3] + '.';
};

//we distribute prizes (розподіляємо призові місця)
var medalForScore = function (score) {
	if (score < 3) {
		return 'Bronze Pig';
	}
	if (score < 7) {
		return 'Silver Pig';
	}
	return 'Golden Pig';
};


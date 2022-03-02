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

//task # 1
var add = function (x, y) {
	return x + y;
};
var multiply = function (a, b) {
	return a * b;
};
add(multiply(36325, 9824), 777);

//tak #2
//I give the function a name (даю функції назву)
var areArraysSame = function (massive1, massive2) {
//if the numbers are the same, but there is at least one difference, the computer notices it
//якщо циферки однакові , але є хоча б одна відмінність, то комп це помічає
	for (var i = 0; i < massive1.length; i++) {
    if (massive1[i] !== massive2[i]) {
      return false;
    }
	//I give a condition of performance of a handicap if length (number of digits is not equal to each other)
	//даю умову виконанння фори, яккщо довжина(кількість циферок не дорівнюж одна одній)
if (massive1.length !== massive2.length) {
    return false;
  }
	}
	return true;
};
	//and so on we compare what we want (і так далі порівнюємо шо хочемо)
	areArraysSame([1, 2, 3], [4, 5, 6]);
        areArraysSame([12, 24, 38], [12, 24, 38]);

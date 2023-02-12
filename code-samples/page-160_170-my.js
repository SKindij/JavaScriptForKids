//deal with functions
let myFirstFunction = function () { console.log('Hello world'); };

// add an argument to the function
let sayHelloTo = function (Svin) { console.log('Hello ' + Svin + "!"); }; 
//then we write what we want to see in the greeting
sayHelloTo("Tatko");

let drawCats = function (howManyTimes) { 
	for (let i = 0; i < howManyTimes; i++) { console.log(i + " =^.^="); }
};
//then write how many times we want this function 
drawCats(5);

//a function can have several arguments (variables)
let blabla = function (Svin, Makaka) {
	console.log('My first argument was: ' + Svin);
	console.log('My second argument was ' + Makaka);
}

//return the value 
let multiply = function (number) { return number * 3 };
//then enter the desired digit (number) in parentheses 
multiply(5) + multiply(2);
multiply( multiply(4) );

//simplify the code 
let pickRandomWord = function (words) {	return words[Math.floor(Math.random() * words.length)]; };
let randomWords = ['Svin', 'Makaka', 'Pig', 'Panda'];
pickRandomWord(randomWords);

//I write a phrase generator in a cool way 
generateRandomGood = function () {
	let GoodWords = ['tasty', 'majestic', 'delicious', 'disgusting'];
	let countries = ['Mexican', 'Italian', 'Englih', 'American', 'Japan'];
	let meals = ['Pizza', 'Burger' , 'Tea', 'Fish', 'Burito', 'Pidcherevina']
	//doing sentences
	let randomSentence = 'My dear geast, I want to advise you this ' + pickRandomWord(GoodWords) + ' ' + pickRandomWord(countries) + ' ' + pickRandomWord(meals) + '!';
	return randomSentence;
};
generateRandomGood();

let fourthLetter = function (name) {
	if (name.length < 4) {	return; }
	return 'The fourth letter of your name is ' + name[3] + '.';
};

//we distribute prizes 
let medalForScore = function (score) {
	if (score < 3) { return 'Bronze Pig'; } 
	if (score < 7) { return 'Silver Pig'; }
	return 'Golden Pig';
};

//task # 1
let add = function (x, y) { return x + y; };
let multiply = function (a, b) { return a * b; };
add(multiply(36325, 9824), 777);

//tak #2
//I give the function a name
let areArraysSame = function (massive1, massive2) {
//if the numbers are the same, but there is at least one difference, the computer notices it
  for (let i = 0; i < massive1.length; i++) {
    if (massive1[i] !== massive2[i]) {
      return false;
    }
//I give a condition of performance of a handicap if length (number of digits is not equal to each other)
    if (massive1.length !== massive2.length) {
      return false;
    }
	}
	return true;
};
	//and so on we compare what we want
	areArraysSame([1, 2, 3], [4, 5, 6]);
        areArraysSame([12, 24, 38], [12, 24, 38]);

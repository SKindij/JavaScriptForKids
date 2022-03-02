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




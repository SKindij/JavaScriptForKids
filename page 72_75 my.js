//random selection of array elements
var GoodWords = ['tasty', 'majestic', 'delicious', 'disgusting'];
var countries = ['Mexican', 'Italian', 'Englih', 'American', 'Japan'];
var meals = ['Pizza', 'Burger' , 'Tea', 'Fish', 'Burito', 'Pidcherevina'];

//generator of nice phrases
var goodWord = GoodWords[Math.floor(Math.random()*4)];
var country = countries[Math.floor(Math.random()*5)];
var meal = meals[Math.floor(Math.random()*6)];

var answer = 'My dear geast, I want to advise you this ' + goodWord + ' ' + country + ' '+ meal + '.';

//random selection of array elements
let GoodWords = ['tasty', 'majestic', 'delicious', 'disgusting'];
let countries = ['Mexican', 'Italian', 'Englih', 'American', 'Japan'];
let meals = ['Pizza', 'Burger' , 'Tea', 'Fish', 'Burito', 'Pidcherevina'];

//generator of nice phrases
let goodWord = GoodWords[Math.floor(Math.random()*4)];
let country = countries[Math.floor(Math.random()*5)];
let meal = meals[Math.floor(Math.random()*6)];

let answer = 'My dear geast, I want to advise you this ' + goodWord + ' ' + country + ' '+ meal + '.';

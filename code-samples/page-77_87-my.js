//pig description
let svin = { 'colour': 'rose', 'name': "Tatko", 'weight': 101};
svin.name;

//in general, arrays work identically to objects
let cat = {};
cat["legs"] = 3;
cat["name"] = "Pushok";
cat["colour"] = "Grey";

//we can also create key objects as follows:
let dog = {};
dog.legs = 3;
dog.name = 'Sharik';
dog.tail = 'really long';

//we can also create arrays of objects:
 let animals = [svin, cat, dog];
 
 animals[2]; //so does the query for a specific key
 
 //task 1
var scores = {};
scores['Max'] = 5;
scores['Vlados'] = 7;
scores['Adama'] = 21;

scores['Max'] +=20;

//task 2
var myCrazyObject = {
	'name': 'A ridiculous object',
	'some array': [7, 9, { purpose: 'confusion', number: 123 }, 3.3],
	'random animal': 'Banana Shark'
};
myCrazyObject["some array"][2].number;

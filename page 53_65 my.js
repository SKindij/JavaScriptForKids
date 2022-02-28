//масив ферма свиней, стійла на 20 місць
var svinFarm = ['Petya' , 'Vasyl' , 'Lyoha'];

//в стадо прийшли ще хряки
svinFarm[3] = 'Sonya';
svinFarm[4] = 'Masha';

//лишаємо кілька місць у стійлах і вонючого свина подалі
svinFarm[19] = 'Ronaldo';

//на ферму прийшла ціла свиноармія
svinFarm[12] = ['Messi' , 'Neymar' , 'Mbappe'];

svinFarm.lenght;

//додаємо ще свиней
svinFarm.push('Ibrahimovich');
svinFarm.push('Yashin');
//on the beginning
svinFarm.unshift('Master');

//заколюєм крайню свиню ):
svinFarm.pop();

//таким чином можна змішувати масиви за допомогою pop unshift та push// 

//pop забирає останній елемент, а shift забирає з початку масиву//
svinFarm.shift();

//став багатим і купив ще гусей
var GeeseHouse = ['Max' , 'Andrew' , 'Lasha', 'John'];
svinFarm.concat(GeeseHouse);
var House = svinFarm.concat(GeeseHouse);
//таким способом можна і декілька масивів об'єднувати, просто в дужках пишеш більше

House.indexOf('Petya');
//з'єднуємо просто і вдужках ставимо бажаний розділовий знак
House.join(-);
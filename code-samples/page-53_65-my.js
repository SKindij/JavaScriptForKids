//area: pig farm, stall for 20 places
let svinFarm = ['Petya', 'Vasyl', 'Lyoha'];

//more boars came to the herd
svinFarm[3] = 'Sonya';
svinFarm[4] = 'Masha';

//we leave a few places in the stalls and the smelly pig away
svinFarm[19] = 'Ronaldo';

//a whole pig army came to the farm
svinFarm[12] = ['Messi' , 'Neymar' , 'Mbappe'];

console.log('Now there are ' + svinFarm.length + ' stalls on the farm.');

//add more pigs
svinFarm.push('Ibrahimovich');
svinFarm.push('Yashin');
//on the beginning
svinFarm.unshift('Master');

//stab the last and first pig):
svinFarm.pop();
svinFarm.shift();

console.log('out farm now ' + svinFarm);

//became rich and bought more geese
let GeeseHouse = ['Max', 'Andrew', 'Lasha', 'John'];
svinFarm.concat(GeeseHouse);
let House = svinFarm.concat(GeeseHouse);

House.indexOf('Petya');

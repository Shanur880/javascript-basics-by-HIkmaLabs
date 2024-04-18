//more on arrays
//let discuss with more exapmples
const dragonBall = ['Goku', 'Vegeta', 'Bulma', 'Piccolo', 'Son Gohan', 'Krillin', 'Tien Shinhan', 'Yamcha'];///cant use[goku,vegata ] because its string not number
console.log('Dragon Ball Characters:', dragonBall);

const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle', 'Pikachu', 'Meowth', 'Jigglypuff', 'Dragonite'];
console.log('Pokemon Characters:', pokemon);

const random = ['h1', 'h5', 'hh7', 'h20'];
console.log('Random Items:', random);
//Adding Dragon Ball Array to Random Array:
random.push(dragonBall);
console.log('Random Items after adding Dragon Ball:', random);
dragonBall.push([...pokemon, ...random]);
console.log('Dragon Ball Characters after adding Pokemon and Random Items:', dragonBall);
//Joining Array Elements into a String:
const dragonBallString = dragonBall.join(', ');
console.log('Dragon Ball characters as a string:', dragonBallString);

//Array.reverse() Method:
const reversedDragonBall = [...dragonBall].reverse();
console.log('Reversed Dragon Ball array:', reversedDragonBall);
// Array.filter() with Index:
const filteredDragonBall = dragonBall.filter((character, index) => index % 2 === 0);
console.log('Filtered Dragon Ball Characters:', filteredDragonBall);


// Concatenating Arrays:
const dragonBallConcatenated = dragonBall.concat(pokemon);
console.log('Dragon Ball Characters concatenated with Pokemon:', dragonBallConcatenated);

//////array under array
const array2 = [2, 3, 4, 5, 1, [3, 5, 7, 9, 0, [5, 5, 5, [, 7, 8, 8, 7]]]];
const real_array2 = array2.flat(Infinity);
console.log('Flattened Array:', real_array2);
console.log('OUTPUT : ',Array.isArray("Shanur"));
console.log('OUTPUT : ',Array.from("Shanur"));
console.log(Array.from({ name: 'Shanur' }).map(obj => obj.name));

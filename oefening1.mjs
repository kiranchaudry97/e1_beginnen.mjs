
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jeNaam = await userInput.question('Wat is je naam? ');
console.log(jeNaam);

let jeLeeftijd = await userInput.question('Hoe oud ben je? ');
console.log(jeLeeftijd);


let FavouriteGame = await userInput.question('Wat is jouw favourite Game');
console.log(FavouriteGame);

console.log('Hallo ' + jeNaam + '. Ik ben Kiran '+ jeLeeftijd +' 27 jaar oud.'+ FavouriteGame +' Favourite game is Clash of Clans.');

process.exit();
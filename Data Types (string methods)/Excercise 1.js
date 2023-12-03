
//1
let challenge=' 30 Day Of JavaScript';
//2
console.log(challenge);

//3
console.log(challenge.length);

//4
console.log(challenge.toUpperCase());

//5
console.log(challenge.toLowerCase());

//6
console.log(challenge.substring(0,2));
// console.log(challenge.substr(0,2)); 

//7
console.log(challenge.substring(3));

//8
console.log(challenge.includes('Script'));

//9
console.log(challenge.split());

let excercise='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

//10
console.log(excercise.split(', '))

//11
let except=excercise.split(',');
console.log(except[except.length-1])

//12
console.log(challenge.replace('JavaScript','Python'));

//13
console.log(challenge.charAt(15));

//14
console.log(challenge.charCodeAt(11));

//15
console.log(challenge.indexOf('a')) //first occurence index

//16
console.log(challenge.lastIndexOf('a')) //last occurence index,if substing not present returns -1

//17
let sentence='You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

//18
console.log(sentence.lastIndexOf('because'));

//19
console.log(sentence.search('because')); //returns first occurence position

//20
console.log(challenge.trim());//removes trailing space(starting and ending)

//21
console.log(sentence.startsWith('Y'));

//22
console.log(sentence.endsWith('n'));
//23
console.log(challenge.match(/a/g))//g-search in whole text(globally)

//24
console.log(challenge.match('a'))//returns first occurence. if not present returns null

//25
let firstSentence='30 Days of ';
console.log(firstSentence.concat('JavaScript'));

//26
console.log(challenge.repeat(2));






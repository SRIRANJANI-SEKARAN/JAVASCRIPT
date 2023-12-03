
//1
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.');

//2
console.log('\"Love is not patronizing and charity isnl\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"');

//3
 let number='10'
console.log(typeof number===10);
let nums=+number;//parseInt(number),Number(number)
console.log(nums===10);//returns true

//4
let float='9.8';
console.log((parseFloat(float))===10);//false
console.log(Math.ceil(parseFloat(float))===10);//true

//5
let word1='python'.includes('on'), word2='jargon'.includes('on');
console.log('\'on\' found in both python and jargon:', word1===word2);

//6
let sentence='I hope this course is not full of jargon.';
console.log(sentence.includes('jargon')); 

//7 inclusively means including 0 and 100
let random=Math.random();//0 to 0.99
console.log(random);
let numBtw0To100=Math.floor(random*101);
console.log(numBtw0To100);

//8 inclusively
let numBtw50To100=Math.floor(random*51+50);
console.log(numBtw50To100);

//9 inclusively
let numBtw0To255=Math.floor(random*256);
console.log(numBtw0To255);

//10
let word3='javascript';
let random1=Math.floor(Math.random()*word3.length);
console.log(word3[random1]); 

//11
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');

//12
let sentence1='You cannot end a sentence with because because because is a conjunction';

let because='because'.length*3+2;
console.log(sentence1.substr(sentence.indexOf('because'),because));//substr(starting index,length)












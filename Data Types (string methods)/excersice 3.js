//1
let sentence='Love is the best thing in this world. Some found their love and some are still looking for their love.';
let wordCount=sentence.match(/love/gi);
console.log(wordCount.length);
//2
let sentence2='You cannot end a sentence with because because because is a conjunction';
let wordCount2=sentence2.match(/because/gi);
console.log(wordCount2.length);
//3
const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching.';
console.log(sentence3.replace(/%/g,'').replace(/@/g,'').replace(/\$/g,'').replace(/&/g,'').replace(/#/g,'').replace(/;/g,'').replace(/!/g,''));
//4
let sentence4='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let counts=sentence4.match(/\d+/g);
console.log(counts)
let num1=Number(counts[0]);
let num2=Number(counts[1]);
let num3=Number(counts[2]);
console.log(`total income: ${num1+num2+num3}`);



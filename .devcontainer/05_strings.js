const name = "jatin"
const repoCount = 50

// console.log(name + repoCount + "Value"); Outdated version to concatenate strings

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);// modern way to get strings all 
//together and a better reading way it is know as string intercolations

//new way of initializing strings
const gameName = new String('jatinjk')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(0,4); // exciting part about slice is we can give negative values as well
const onemoreString = gameName.slice(1,4);

console.log(anotherString);
console.log(onemoreString);

const newStringOne = "      jatin     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://jatin.com/jatin%20kateja"

console.log(url.replace('%20','-'));

console.log(url.includes('hehhe'));

console.log(gameName.split('-'))





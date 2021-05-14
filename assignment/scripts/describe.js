// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
/*
Created a variable using command 'let', then assigned it with the value 'Dane'.
Then we run a conditional using command 'if'. If whatever is inbetween the (), or conditional1, is true,
then it will run whatever block of code is between the {}. In this case, if our variable
name ('Dane)'' is equal to exactly (===) the value 'Mary', then it will run,
'console.log('Hi, Mary!');'. Using command 'else' will run conditional2, if the first conditional
isnt true. So in this case, 'name' does not equal 'Mary', so the 'else' command will run
'console.log('How do you do?');'.
*/

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}
*/

// 2. WRITE YOUR DESCRIPTION HERE
/*
Created a variable using 'let', named it 'secret' but did not assing a value to it.
Created another variable 'code', gave it a value of '123'
Ran a conditional, asking if this is true: Is 'code', === (equal to exactly), '123'.
If that is true, run the code between {}. Which assigned a value of 'super' to our variable
'secret'. And also changing the value of 'code' to 'code * 2'. So now code has a new value of
'123 * 2' which is an equation that equals '246'. So the value for 'code' is now 246.

Then we run another if statement. If 'code' is, > (greater than), '250' run code between {}
So since, 'code' (246) is NOT greater 250. then the code between the {} does not get executed.
So the value of 'secret', when we log it out, is still 'super'.
*/


//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
/*
Created variable 'isStudent', which is a boolean so its either 'true' or 'false', in this case 'true'.
Created variable 'age', assigned it a value of '34'.
Created variable 'zip', assigned it a value of '55407'.
The if statement is checking if 'isStudent', is exactly (===) true, and also using the 'and' operator (&&)
to check if 'zip' is greater than (<) 80000. Both of these have to be true in order to execute the code between the {}.
The else if statement is a new conditional to test if the first one is 'false', which in this case it is false.
So now, else if i9s asking 'isStudent' === 'false', and also using the 'or' operator (||), is age less than (<) 30.
So 'isStudent' is true, and 'age' (34) is not less than 30. So since neither of those are true we move on to another else if
The else if statement is asking 'isStudent' === true, in this case it is true, so we log out, 'Welcome to Prime!'
*/

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/

//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red'; // FIX - colorOne should be set to 'blue'
let colorTwo = 'blue'; //FIX - colorTwo should be set to 'red'
let mix = true;

if (mix === true) { // FIX - In between the () can just have the word mix, since its already checking if thats true.
  colorOne = 'purple'; // FIX - colorTwo also needs to be changed to 'purple'
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4; // FIX - const should be changed to 'let'

if (temp > 39 || time >= 4) { FIX - the operator (||) stands for 'or', we need the operator (&&) for 'and'
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

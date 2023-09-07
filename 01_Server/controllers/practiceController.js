// start by creating something called a "router"
// this will be used to help navigate and control endpoints
//const express = require('express'); // make sure I have access to express
//const router = express.Router(); // make a new instance of express router
const router = require('express').Router();

// create some endpoints using this router
// basic GET router `/`
//* if my route ONLY has a `/`, it means I do not have to write anything else in my URL
//? `/practice/`
router.get(`/`, (request, response) => {
  response.json('Practice Controller');
});

//* `/practice/something`
router.get('/something', (req, res) => {
  res.json({sample: 'This is the something endpoint'});
});

// make this router available outside of this file
module.exports = router;
// export the "router" variable from this module. This means if we were to "require" this file, we would be giving the "require" our router
// Whatever value is assigned to the module.exports is what we will export, if we have an object, it means we are sending out an object

/*
TODO CHALLENGE
? create an endpoint which will, upon using the get method, send back a response containing an array. This array will be numbers from 1-100, with numbers that are multiple of 5 saying "Buzz", numbers that are a multiple of 3 saying "Fizz", and numbers that are multiple of both saying "Fizz Buzz" in their place.

!Stretch Goal:
? instead of a new endpoint, make a new controller with a "fizz-buzz endpoint"
*/

//* Jerome's example walk through
router.get('/fizz-buzz', (req, res) => {
 // make an array with all numbers from 1-100
 let numbers = [];
 for(let i = 1; i < 101; i++) {
   // do some math to check my numbers for fizz buzz
   i % 15
    ?
    numbers.push('Fizz Buzz')
    :
   i % 5 === 0
    ?
    numbers.push('Buzz')
    :
   i % 3 === 0
    ? 
    numbers.push('Fizz')
    :
    numbers.push(i)  
   // put numbers into the array
 }

  //res.json({array: numbers});
  //res.json({array: [...numbers]}); //* spread operator
  //res.json({numbers}); //* property `numbers` with value from numbers
  res.json(numbers); //* just sending back an array to the client
  //? .json() will format our data properly as a JSON, while .send() is only going to send the data and may not parse properly
}) 

//* Our Groupwork in challenge
/*
let numArray = [];
let fizzBuzzArray = [];

for (let x = 1; x < 101; x++) numArray.push(x);

numArray.forEach(function(number) {
  if (number % 15 === 0) 
    fizzBuzzArray.push('FizzBuzz');
   else if (number % 5 === 0) 
    fizzBuzzArray.push('Buzz');
   else if (number % 3 === 0) 
    fizzBuzzArray.push('Fizz');
  else
  fizzBuzzArray.push(number)
}); 

router.get('/array', (req, res) => {
  res.json(fizzBuzzArray);
});
*/

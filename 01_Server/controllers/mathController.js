//* I must have the express package, and then I will create a new instance of the "Router"
const router = require('express').Router();

router.post('/addition', (request, response) => {
  let sum;
  console.log(request.body);
  const {numberOne, numberTwo} = request.body;
  // destructure our request body to get both the numberOne and numberTwo properties
  console.log(numberOne);
  console.log(numberTwo);

  if(typeof numberOne === 'number' && typeof numberTwo === 'number') {
   //console.log('');
   sum = numberOne + numberTwo;
   response.status(200).json({message: 'Addition Complete?', sum});
   // our response is NOT a return, the function will keep running after we send a response to the client
  } else {
    if (typeof numberOne !== 'number') {
    response.status(500).json({error: 'numberOne is not a number'});
  } else {
    response.status(500).json({error: 'numberTwo is not a number'});
  }
 }
})

module.exports = router;


/*
! Challenge
Create a new controller named `mathController` which will have one single `addition` endpoint. This endpoint will require a POST action, and should expect 2 pieces of information from the request. Once you go to this endpoint, it will take those two numbers and add them together before sending the sum back the the client. This should have a status of 200 when it runs properly.

*STRETCH GOAL:
Check whether the client has sent you two numbers; only run the addition when you have two numbers, otherwise send back an error response to the server telling the client what went wrong
*/
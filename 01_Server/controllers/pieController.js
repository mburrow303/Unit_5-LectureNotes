//? STEP 1: Create a router
const express = require('express');
const router = express.Router();
// const router = require('express').Router();
const pies = [];
let currentId = 1;

/*
{
  id: 1
 filling: 'blueberry',
 crust: 'graham cracker',
 size: 14, 
}

{
  id: 2
 filling: 'blueberry',
 crust: 'graham cracker',
 size: 14, 
}
*/

//? STEP 2: Add endpoints to our new router
router.get('/',(req, res) => {
  //* GET - get information from a link
  // perform some code
  res.json({message: "List of Pies", pies, orderStatus: "pending"});
})

router.post('/new', (req, res) => {
  //* POST - used to send information from a client to a server
  //console.log(req); // give us the ENTIRE request object
  console.log(req.body); //* this is going to be the "body", or the main content, of the request
  //pies.push(req.body); // add our request body into our pies array

  //TODO Validate that our filling is a string, our crust is a string, and our size is a number before adding the new pie to our array, if something is input with an improper type tell the client what is wrong. [this will be written within the post method js:31-47]
  let newPie = {
    id: currentId,
    filling: req.body.filling,
    crust: req.body.crust,
    size: req.body['size'] // we can also use square brackets and not just dot notation (did someone say loops?)
  }
  pies.push(newPie);
  currentId++;
  res.status(202).json({message: 'new pie', newPie});

  //TODO Challenge
  /*
  if(typeof filling === 'string' && typeof crust === 'string' && typeof size === 'number') {
    response.status(200).json({message: 'criteria correct'});
  } else {
    if (typeof filling !== 'string') {
      response.status(500).json({error: 'filling is not a string'});
    } if (typeof crust !== 'string') {
      response.status(500).json({error: 'crust is not a string'});
    } 
    if (typeof size !== 'number') {
      response.status(500).json({error: 'size is not a number'});
    }
  }
  */
})

//*        parameter - id
router.get('/single/:id', (request, response) => {
  //* I can add parameters by using a `/:paramName`
  //console.log(request.body);
  //? URL Parameters
  console.log(request.params);
  // find my pie with a certain id in my pies array
  let pieFound = false;

  pies.forEach((pie) => {
    if(pie.id == request.params.id) {
      response.status(200).json({pie});
      pieFound = true;
    }
  })

  if(!pieFound) {
    response.status(404).json({message: 'pie not found'}) 
  }
})

//? STEP 3: export our router (make it available in other files)
module.exports = router;
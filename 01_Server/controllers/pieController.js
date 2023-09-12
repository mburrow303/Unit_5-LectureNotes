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
  //! This will not run at /single
  //* I can add parameters by using a `/:paramName`
  //console.log(request.body);
  //? URL Parameters
  console.log(request.params);
  // find my pie with a certain id in my pies array
  let pieFound = false;

  pies.forEach((pie) => {
    if(pie.id == request.params.id) {
      response.status(200).json({pie});
      //! a Response is NOT a return, the function will keep running
      pieFound = true;
    }
  })

  if(!pieFound) { //* only run IF `pieFound` has a false value
    response.status(404).json({message: 'pie not found'}) 
  }
})

// Edit a pie using HTTP PUT method
// PUT - HTTP method to edit information
router.put('/single/:id', (request, response) => {
  //* I am allowed to use the same endpoint multiple times AS LONG AS the method is different each time
  // My url parameter can be named anything, just like when I write a function parameter. This can be spelled any way as long as I use it consistently AND do not overwrite a JS keyword
  //response.status(200).json({ message: 'PUT endpoint', target: request.params.id});

  // how to edit my pie
  let pieFound = false;
  //  1 - get the index of the pie to edit or the pie itself
  //    my id will NOT always match the position of the pie
  pies.forEach((pie) => {
    console.log(typeof pie.id); // number
    console.log(typeof request.params.id); // string
    if(pie.id == request.params.id) {
      // 2 - gather the information from postman
      // 3 - set old keys of our pie to the new values from postman
      pie.filling = request.body.filling;
      pie.crust = request.body.crust;
      pie.size = request.body.size;
      response.status(200).json({message: `Pie ${request.params.id} has been updated`, pie});
      pieFound = true;
    }
  })

  if(!pieFound) { //* only run IF `pieFound` has a false value
    response.status(404).json({error: `Pie ${request.params.id} not Found`}) 
  }
})

// DELETE method - remove item(s)
router.delete('/single/:id', (request, response) => {
  let pieIndex = -1;
  // forEach to find our pie
  pies.forEach((pie, index) => {
    // keep track of the index when we find a matching id
    // we will not remove anything in this loop, only find our id if it exists
    if(pie.id == request.params.id) {
      pieIndex = index;
    }
  })
//   0  1  2  3  4  5  
//* [1, 2, 3, 4, 5, 6]
  // we can remove a certain index from an array, as long as we know what index to remove
  //? how do I know my pieIndex has been updated? 
  //* if I start my pieIndex at -1, whenever that value still reads `-1` I know it has not been changed, since arrays will never have an index lower than `0`
  if(pieIndex >= 0) {
    // remove my pie from the pies array
    pies.splice(pieIndex, 1);
    response.status(200).json({message: `Pie at index ${pieIndex} has been removed`})
  } else {
    response.status(404).json({error: "No pie deleted"})
  }
})

//? STEP 3: export our router (make it available in other files)
module.exports = router;
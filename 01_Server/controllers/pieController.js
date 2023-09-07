//? STEP 1: Create a router
const express = require('express');
const router = express.Router();
// const router = require('express').Router();
const pies = [];

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
  pies.push(req.body); // add our request body into our pies array
  res.status(202).json({message: 'new pie'});
})

//? STEP 3: export our router (make it available in other files)
module.exports = router;
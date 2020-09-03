const express = require('express');
const router = express.Router()
const Employee = require('../models/Employee');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, file.filename + '-' + Date.now());
  }
})

const upload = multer({ dest: 'uploads' });

router.post('/create-employee', upload.single('avatar'), (req, res) => {
  const { name, email, tel } = req.body;
  console.log(req)
  
  const newEmployee = Employee({ 
    name, 
    email, 
    tel, 
    avatar: {
      data: fs.readFileSync(path.join(__dirname, '/uploads/' + req.file.filename)),
      contentType: 'image/png'
    } 
  });
  
  if(!Employee.exists({ email }, (error, response) => {
    if(error) console.log(error);
    if(!response) {
      newEmployee.save()
      return res.status(200).json({ status: 200, msg: `${name} was successfully added!` });
    } else {
      return res.status(400).json({ status: 400, msg: `A user with the email address ${email} already exists.`})
    }
  }));
});

//Get ALL employees
router.get('/get-employees', (req, res) => {
  Employee.find((err, response) => {
    if(err) console.error(err)
    if(response.length === 0) {
      res.json({ msg: 'No users were found!' })
    } else {
      res.send(response);
    }
  });
}) 

//Get a SINGLE employee by ID
router.get('/get-employee/:id', async (req, res) => {
  let id = req.params.id
  Employee.findById(id, (err, employee) => {
    if(err) console.error(err);
    res.json(employee)
  })
})

router.post('/create-schedule/:id', async (req, res) => {
  //bring in the schedule object from the client
  const { schedule } = req.body;
  console.log(schedule);
  
    await Employee.findByIdAndUpdate(req.params.id, {schedule}, { upsert: true, new: true, useFindAndModify: false });

    res.json('the users schedule was successfully created!');
})

//Update a SINGLE employee Schedule
router.put('/update-schedule/:id', (req, res) => {
  Employee.findByIdAndUpdate({ id: req.params.id }, (err, response) => {
    if(err) console.error(err);
    //TODO: Create the post route for new schedule. Look up mongoose
    //docs findByIdAndUpdate
  })
})

module.exports = router;
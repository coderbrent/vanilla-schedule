const express = require('express');
const router = express.Router()
const Manager = require('../models/Manager');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, file.filename + '-' + Date.now());
  }
})

const upload = multer({ dest: 'uploads' });

router.post('/create-manager', upload.single('avatar'), (req, res) => {
  const { name, email, tel } = req.body;
  console.log(req)
  
  const newManager = Manager({ 
    name, 
    email, 
    tel, 
    avatar: {
      data: fs.readFileSync(path.join(__dirname, '/uploads/' + req.file.filename)),
      contentType: 'image/png'
    } 
  });
  
  if(!Manager.exists({ email }, (error, response) => {
    if(error) console.log(error);
    if(!response) {
      newManager.save()
      return res.status(200).json({ status: 200, msg: `${name} was successfully added!` });
    } else {
      return res.status(400).json({ status: 400, msg: `A user with the email address ${email} already exists.`})
    }
  }));
});
  
router.get('/get-managers', (req, res) => {
  Manager.find((err, response) => {
    if(err) console.error(err)
    if(response.length === 0) {
      res.json({ msg: 'No users were found!' })
    } else {
      res.send(response);
    }
  });
});
  
router.get('/get-manager/:id', (req, res) => {
  Manager.findById({ id: req.params.id }, (err, response) => {
    if(err) console.error(err);
    res.json(response);
  });
});

module.exports = router;
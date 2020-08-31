const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const port = 5000 || process.env.PORT;

multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, file.filename + '-' + Date.now());
  }
})

const upload = multer({ dest: 'uploads' });

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors());

mongoose.connect('mongodb://localhost:27017', 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
  });

db.on('open', () => console.log('db connection successful'))

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  tel: String,
  avatar: {
    data: Buffer,
    contentType: String
  },
})

const User = mongoose.model('User', userSchema);

app.post('/add-user', upload.single('avatar'), (req, res) => {
  const { name, email, tel } = req.body;
  console.log(req)

  const newUser = User({ 
    name, 
    email, 
    tel, 
    avatar: {
      data: fs.readFileSync(path.join(__dirname, '/uploads/' + req.file.filename)),
      contentType: 'image/png'
    } 
  });
  
  if(!User.exists({ email }, (error, response) => {
    if(error) console.log(error);
    if(!response) {
      newUser.save()
      return res.status(200).json({ status: 200, msg: `${name} was successfully added!` });
    } else {
      return res.status(400).json({ status: 400, msg: `A user with the email address ${email} already exists.`})
    }
  }));
});

app.get('/users', (req, res) => {
  User.find((err, response) => {
    if(err) console.error(err)
    if(response.length === 0) {
      res.json({ msg: 'No users were found!' })
    } else {
      res.send(response);
    }
  });
}) 

app.get('/user/:id', (req, res) => {
  User.findById({ id: req.params.id }, (err, response) => {
    if(err) console.error(err);
    res.json(response);
  })
})

app.listen(port, () => console.log('listening on port 5000'));
const fs = require('fs');
const path = require('path');

const mazeFile = 
  fs.readFileSync(
    path.join(__dirname, '/maze.txt'), 'utf8', (err, data) => {
    if(err) console.error(err);
    return data
})

const navigator = file => {
  let mazeArr = file.split('\n');

  for(let i = 0; i < mazeArr.length; i++) {
    mazeArr[i]
  }  

}

navigator(mazeFile);
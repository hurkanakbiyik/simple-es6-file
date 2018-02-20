// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv')
  .config();
const path = require('path');
const ReadAndSum = require('./ReadAndSum');

const filePath = process.env.FILE_PATH ? process.env.FILE_PATH : '/files/';
const file = process.env.START_FILE ? process.env.START_FILE : '/A.txt';
const readAndSum = new ReadAndSum(path.join(__dirname, filePath), file);
readAndSum.init((fileName, sum) => {
  console.log(`${fileName} -> ${sum}`);
});

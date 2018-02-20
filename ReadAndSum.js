const fs = require('fs');
const path = require('path');

class ReadAndSum {
  constructor(filePath, startFile) {
    this.filePath = filePath;
    this.startFile = startFile;
  }
  init(done) {
    this.done = done;
    this.readFileAndGetSum(path.join(this.filePath, this.startFile));
  }
  readFileAndGetSum(file) {
    let sum = 0;
    const contents = fs.readFileSync(file, 'utf8');
    const lines = contents.split('\n');
    lines.forEach((line) => {
      if (Number.isInteger(line)) {
        sum += Number.parseInt(line, 10);
      } else if (isFloat(line) > 0) {
        sum += Number.parseFloat(line);
      } else if (line !== '') {
        // call recursive
        sum += this.readFileAndGetSum(path.join(this.filePath, line));
      }
      // TODO check recursive same file
      // TODO empty line
      // TODO check not a file line
    });
    this.done(file, sum);
    return sum;
  }
}

function isFloat(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

module.exports = ReadAndSum;

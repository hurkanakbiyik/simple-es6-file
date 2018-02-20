const path = require('path');
const expect = require('chai').expect;
const ReadAndSum = require('../ReadAndSum');

const filePath = '../files/';
const aFile = '/A.txt';
const bFile = '/B.txt';
const cFile = '/C.txt';

describe('for A.txt', () => {
  const readAndSum = new ReadAndSum(path.join(__dirname, filePath), aFile);
  it('should sum lines inside file', (done) => {
    let count = 0;
    readAndSum.init((fileName, sum) => {
      if (fileName.indexOf('A.txt') > -1) {
        expect(sum)
          .to
          .equal(111);
      } else if (fileName.indexOf('B.txt') > -1) {
        expect(sum)
          .to
          .equal(39);
      } else if (fileName.indexOf('C.txt') > -1) {
        expect(sum)
          .to
          .equal(12);
      }
      count += 1;
      if (count === 3) {
        done();
      }
    });
  });
});

describe('for B.txt', () => {
  const readAndSum = new ReadAndSum(path.join(__dirname, filePath), bFile);
  it('should sum lines inside file', (done) => {
    let count = 0;
    readAndSum.init((fileName, sum) => {
      if (fileName.indexOf('B.txt') > -1) {
        expect(sum)
          .to
          .equal(39);
      } else if (fileName.indexOf('C.txt') > -1) {
        expect(sum)
          .to
          .equal(12);
      }
      count += 1;
      if (count === 2) {
        done();
      }
    });
  });
});

describe('for C.txt', () => {
  const readAndSum = new ReadAndSum(path.join(__dirname, filePath), cFile);
  it('should sum lines inside file', (done) => {
    readAndSum.init((fileName, sum) => {
      if (fileName.indexOf('C.txt') > -1) {
        expect(sum)
          .to
          .equal(12);
        done();
      }
    });
  });
});

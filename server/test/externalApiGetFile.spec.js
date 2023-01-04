import { expect } from 'chai';
import externalApiGetFile from '../functions/externalApiFunctions/externalApiGetDataFile.js';

const externalApiFile = await externalApiGetFile("test2.csv")

const firstFileOfexternalApiFile = externalApiFile[0]

const firstObjectOfFile = firstFileOfexternalApiFile[0]

describe('test that the externalApiGetFile function is called', function () {
  describe('should return an array when externalApiGetFile is called', function () {
    it('keys must be present in the externalApiGetFile', function () {
      expect(firstObjectOfFile).to.have.keys([`file`, `text`,`number`, `hex`]);
    });
  });
});
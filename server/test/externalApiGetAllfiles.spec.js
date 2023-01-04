import {expect} from 'chai';
import externalApiGetAllfiles from '../functions/externalApiFunctions/externalApiGetAllDatafiles.js';

const ExternalApiAllFiles = await externalApiGetAllfiles()

const firstFileOfExtartanlApiFiles = ExternalApiAllFiles[0]

const firstObjectOfFile = firstFileOfExtartanlApiFiles[0]

describe('test that the externalApiGetAllfiles function is called', function () {
  describe('should return an array when externalApiGetAllfiles is called', function () {
    it('keys must be present in the externalApiGetAllfiles', function () {
      expect(firstObjectOfFile).to.have.keys([`file`, `text`,`number`, `hex`]);
    });
  });
});
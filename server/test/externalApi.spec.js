import {expect} from 'chai';
import externalApi from '../functions/externalApiFunctions/externalApi.js';

const ExternalApi = await externalApi()

const ExternalApiJson = JSON.parse(ExternalApi)

describe('test that the external API function is called', function () {
    it('should return an array when externalApi is called', function () {
      expect(ExternalApiJson).to.have.property('files');
    });
});
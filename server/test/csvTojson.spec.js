import {expect} from 'chai';
import csvTojson from '../functions/utils/csvTojson.js'

const csvData = `file,text,number,hex
file,text,number,hex
test2.csv,foGtA
test2.csv,OvpDnWIdYYhoLhyVkyndN,36045215,32b919ef3ee9525e5527b325eee5a767
file,text,number,hex
test3.csv,UWNLu
test3.csv,Ae,27,6a2601c1fa4f309bd28018d378f70c07
test3.csv,cnIXVzfQKHXMEPAnzLbpciKjBLb,72351,7216221e9874fd66c9a6cb1a16cc6949
test3.csv,bKttQGHEOFpxDaGlHkpUo,7826,a83a882ed9ef9d677326843ef7aeaf15
Error code 500
Error code 404
file,text,number,hex
test6.csv,hfGnu
test6.csv,prVTHEKLZjBdXQVidEULVxxlAGCme,36560,8113bb777956690b1d0abae910c5f66e
test6.csv,LTEsEcEdFzicJMdWhfguqFpoHZyo,273249,1877490ab44aa9fba11b4d2d7b68b81e
test6.csv,fvexelKQqsuXDPHduC,07,2805245b7a7d73d2afdf00171b0bba99
test6.csv,nerpuPca,50,ace089b55b274a588345e2e8628b98ea
test6.csv,llT,62733,6e01d07206bbb2aeac959f891d744e2e
test6.csv,SyOqHuhkrCcHUtXJiah,550,2c16337aab6dcaf39ccb927dd2075ece
test6.csv,xnnPxDnDi,74,205593ec0c0d76140ef154732b429751
test6.csv,C,207322,bc123a220128cbf05b0387cc6533cdd4,,
test6.csv,tsWkN
file,text,number,hex
test9.csv,YIsEV
test9.csv,S,7,4c8135437b9fe217e56426fa0ad0b0c3
test9.csv,GtfImWUYsNSSnTqSr,60929533,c4c57d4918b28c40ae6b468c6c03282a
test9.csv,TYqSWZTksLsFdnXSXFNNHNhlEySDXb,70447202,9f87bd65e76cfa41092c9303e02c43cb
test9.csv,iEQxcJGcEVk,053051310,0e2e159680fa7565b91ec4a587999a1f
test9.csv,axfK,417857,31b1ea67df1d851b7929b11e2a9ee5a6
test9.csv,La,81,c6615325872726a7c46cc4848698a6db
test9.csv,JfQsQJHvoqiUluhaZaVSAIepcz,0956805477,b9d096e6a463fa3c4d5921d504fd6d55
test9.csv,YWQjOsGfoAhEogEurcSIxd,4518448,480a8a3caefb5a9cd49627fcb58f08fd,,
test9.csv,WkJaQ
test9.csv,jtmukVQ,168908,30c049d3253bad03df05123f9d8694c8
test9.csv,n,642,8f56e6a52dd816b496a0b8820452fd52`

const arrayData =[
    { file: 'file', text: 'text', number: 'number', hex: 'hex' },
    {
      file: 'test2.csv',
      text: 'foGtA',
      number: undefined,
      hex: undefined
    },
    {
      file: 'test2.csv',
      text: 'OvpDnWIdYYhoLhyVkyndN',
      number: '36045215',
      hex: '32b919ef3ee9525e5527b325eee5a767'
    },
    { file: 'file', text: 'text', number: 'number', hex: 'hex' },
    {
      file: 'test3.csv',
      text: 'UWNLu',
      number: undefined,
      hex: undefined
    },
    {
      file: 'test3.csv',
      text: 'Ae',
      number: '27',
      hex: '6a2601c1fa4f309bd28018d378f70c07'
    },
    {
      file: 'test3.csv',
      text: 'cnIXVzfQKHXMEPAnzLbpciKjBLb',
      number: '72351',
      hex: '7216221e9874fd66c9a6cb1a16cc6949'
    },
    {
      file: 'test3.csv',
      text: 'bKttQGHEOFpxDaGlHkpUo',
      number: '7826',
      hex: 'a83a882ed9ef9d677326843ef7aeaf15'
    },
    {
      file: 'Error code 500',
      text: undefined,
      number: undefined,
      hex: undefined
    },
    {
      file: 'Error code 404',
      text: undefined,
      number: undefined,
      hex: undefined
    },
    { file: 'file', text: 'text', number: 'number', hex: 'hex' },
    {
      file: 'test6.csv',
      text: 'hfGnu',
      number: undefined,
      hex: undefined
    },
    {
      file: 'test6.csv',
      text: 'prVTHEKLZjBdXQVidEULVxxlAGCme',
      number: '36560',
      hex: '8113bb777956690b1d0abae910c5f66e'
    },
    {
      file: 'test6.csv',
      text: 'LTEsEcEdFzicJMdWhfguqFpoHZyo',
      number: '273249',
      hex: '1877490ab44aa9fba11b4d2d7b68b81e'
    },
    {
      file: 'test6.csv',
      text: 'fvexelKQqsuXDPHduC',
      number: '07',
      hex: '2805245b7a7d73d2afdf00171b0bba99'
    },
    {
      file: 'test6.csv',
      text: 'nerpuPca',
      number: '50',
      hex: 'ace089b55b274a588345e2e8628b98ea'
    },
    {
      file: 'test6.csv',
      text: 'llT',
      number: '62733',
      hex: '6e01d07206bbb2aeac959f891d744e2e'
    },
    {
      file: 'test6.csv',
      text: 'SyOqHuhkrCcHUtXJiah',
      number: '550',
      hex: '2c16337aab6dcaf39ccb927dd2075ece'
    },
    {
      file: 'test6.csv',
      text: 'xnnPxDnDi',
      number: '74',
      hex: '205593ec0c0d76140ef154732b429751'
    },
    {
      file: 'test6.csv',
      text: 'C',
      number: '207322',
      hex: 'bc123a220128cbf05b0387cc6533cdd4'
    },
    {
      file: 'test6.csv',
      text: 'tsWkN',
      number: undefined,
      hex: undefined
    },
    { file: 'file', text: 'text', number: 'number', hex: 'hex' },
    {
      file: 'test9.csv',
      text: 'YIsEV',
      number: undefined,
      hex: undefined
    },
    {
      file: 'test9.csv',
      text: 'S',
      number: '7',
      hex: '4c8135437b9fe217e56426fa0ad0b0c3'
    },
    {
      file: 'test9.csv',
      text: 'GtfImWUYsNSSnTqSr',
      number: '60929533',
      hex: 'c4c57d4918b28c40ae6b468c6c03282a'
    },
    {
      file: 'test9.csv',
      text: 'TYqSWZTksLsFdnXSXFNNHNhlEySDXb',
      number: '70447202',
      hex: '9f87bd65e76cfa41092c9303e02c43cb'
    },
    {
      file: 'test9.csv',
      text: 'iEQxcJGcEVk',
      number: '053051310',
      hex: '0e2e159680fa7565b91ec4a587999a1f'
    },
    {
      file: 'test9.csv',
      text: 'axfK',
      number: '417857',
      hex: '31b1ea67df1d851b7929b11e2a9ee5a6'
    },
    {
      file: 'test9.csv',
      text: 'La',
      number: '81',
      hex: 'c6615325872726a7c46cc4848698a6db'
    },
    {
      file: 'test9.csv',
      text: 'JfQsQJHvoqiUluhaZaVSAIepcz',
      number: '0956805477',
      hex: 'b9d096e6a463fa3c4d5921d504fd6d55'
    },
    {
      file: 'test9.csv',
      text: 'YWQjOsGfoAhEogEurcSIxd',
      number: '4518448',
      hex: '480a8a3caefb5a9cd49627fcb58f08fd'
    },
    {
      file: 'test9.csv',
      text: 'WkJaQ',
      number: undefined,
      hex: undefined
    },
    {
      file: 'test9.csv',
      text: 'jtmukVQ',
      number: '168908',
      hex: '30c049d3253bad03df05123f9d8694c8'
    },
    {
      file: 'test9.csv',
      text: 'n',
      number: '642',
      hex: '8f56e6a52dd816b496a0b8820452fd52'
    }
  ]

const convertDataToJson = await csvTojson(csvData)

describe('test the csvToJson function', function () {
    describe('transform csv to json file', function () {
      it('should return json', function () {
        expect(arrayData).deep.to.equal(convertDataToJson);
      });
    });
  });
import fetch from "node-fetch"
import csvTojson from '../utils/csvTojson.js'


export default async function apiexternaGetFile(fileName) {

    let target = `https://echo-serv.tbxnet.com/v1/secret/file/${fileName}`


    const dataFile = []
    const res = await fetch(target, {
        headers: {
            'authorization': 'Bearer aSuperSecretKey',
        }
    });

    if (res.status === 200) {

        const csvDataFile = await res.text();

        const jsonDataFile = await csvTojson(csvDataFile)

        dataFile.push(jsonDataFile)


    } else {
        console.log(`Error code ${res.status}`);
    }

    return dataFile

}
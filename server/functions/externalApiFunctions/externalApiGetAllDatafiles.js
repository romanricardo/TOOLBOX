import fetch from "node-fetch"
import externalApi from './externalApi.js'
import csvTojson from '../utils/csvTojson.js'


export default async function externalApiGetAllfiles() {

    const externalApiData = await externalApi()

    const allFilesName = JSON.parse(externalApiData);

    const urlArray = []

    const url = [allFilesName].map(async filesName => {

        return await filesName.files.map(async (data) => {

            let target = `https://echo-serv.tbxnet.com/v1/secret/file/${data}`

            return urlArray.push(target)
        });
    })

    const dataFilesArray = []

    for (let urlsfiles of urlArray) {

        const res = await fetch(urlsfiles, {
            headers: {
                'authorization': 'Bearer aSuperSecretKey',
            }
        });

        if (res.status === 200) {

            const dataFileCsv = await res.text();

            const dataFileJson = await csvTojson(dataFileCsv)

            if (!dataFileJson.length == 0) {

                dataFilesArray.push(dataFileJson)
            } else {
                console.log(`Empty file`)
            }

        } else {
            console.log(`Error trying to download the file. Status code ${res.status}`);
        }
    }

    return dataFilesArray

}
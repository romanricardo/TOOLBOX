import externalApiGetAllFiles from './functions/externalApiFunctions/externalApiGetAllDatafiles.js'
import externalApiGetFile from './functions/externalApiFunctions/externalApiGetDataFile.js'
import externalApi from './functions/externalApiFunctions/externalApi.js'
import express from 'express'

const app = express()

app.set('port', 5000)
app.set('json spaces', 2)

app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Accept");
    res.header("Content-Type", "application/json");
    next();
});

const api = await externalApiGetAllFiles()

app.get(['/files/data:', '/files/data'], async (req, res) => {

    const file = await externalApiGetFile(req.query.filename)

    const fileName = req.query.filename

    if (fileName) {
        return res.json(file)
    }
    else {
        return res.json(api)
    }
})

app.get('/files/list', async (req, res) => {

    const getlist = await externalApi()

    const list = JSON.parse(getlist)

    return res.json([list])

})

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})

export default app
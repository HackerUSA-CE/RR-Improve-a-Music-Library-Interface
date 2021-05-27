require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express()
const cors = require('cors')
// If you're here and you like writing routes, feel free to add some of your own! Get creative with what the itunes API can serve back by visiting their documentation:
// https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/

app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send('Please use /album/:artistId to search for all albums by artist or /song/:albumId to search for all songs by an album id')
})

app.get('/album/:artistId', async (req, res) => {
    // searches for all albums by artist, feed itunes artistId into params
    let response = await axios.get(`https://itunes.apple.com/lookup?id=${req.params.artistId}&entity=album`)
    res.status(200).send(response.data)
})

app.get('/song/:albumId', async (req, res) => {
    // searches for all songs by album
    let response = await axios.get(`https://itunes.apple.com/lookup?id=${req.params.albumId}&entity=song`)
    res.status(200).send(response.data)
})

app.get('*', (req, res) => {
    res.status(404).send('404: Not Found')
})

app.listen(process.env.PORT || 4000, () => console.log(`Listening on ${process.env.PORT || 4000}`))
require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express()

app.get('/album/:artistId', async (req, res) => {
    // searches for all albums by artist, feed itunes artistId into params
    let response = await axios.get(`https://itunes.apple.com/lookup?id=${req.params.artistId}&entity=album`)
    res.send(response.data)
})

app.get('/song/:albumId', async (req, res) => {
    // searches for all songs by album
    let response = await axios.get(`https://itunes.apple.com/lookup?id=${req.params.albumId}&entity=song`)
    res.send(response.data)
})

app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`))
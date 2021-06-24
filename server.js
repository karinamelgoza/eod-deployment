const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/styles', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/styles.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/main.js'))
})

app.get('/cat', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/cat-551554_1920.jpg'))
})


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server up on ${port}`)
})
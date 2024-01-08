const express = require('express')

const port = 5100

const app = express()

app.get('/', (req, res) => {
    res.send('hello world!!!!!')
})

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
})
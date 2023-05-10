const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 7000;

app.use(cors())
const test = require('./test.json');

app.get('/', (req, res) => {
    res.send('news api!')
  })

  app.get('/hello-test', (req, res) =>{
    res.send(test)
})

  app.listen(port, () => {
    console.log(`i am working on it ${port}`)
  })
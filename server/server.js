const express = require('express')

const app = express()
app.use(express.json())

const movieRouter = require('./routes/movie')
app.use('/movie', movieRouter)

app.listen(4000, '0.0.0.0', () => {
    console.log('Server started on port 4000')
})
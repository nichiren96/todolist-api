const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config({ path: './.env'})

const server = require('./src/app')

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false})
    .then(() => console.log('Connected to Database'))


const port = process.env.PORT || 8000

server.listen(port, () => console.log(`Server listening on port ${port}...`))
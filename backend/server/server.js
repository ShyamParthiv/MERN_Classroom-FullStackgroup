require('dotenv').config()
import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { family: 4 })
mongoose.connection.on('error', (err) => {
  console.error(`unable to connect to database: ${config.mongoUri}\nDetailed Error:`, err);
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})

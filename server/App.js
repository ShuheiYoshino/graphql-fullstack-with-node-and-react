const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')
const schema = require('./schema/schema')
const cors = require('cors')
const app = express()

app.use(cors())
mongoose.connect('dummy')
mongoose.connection.once('open', () => {
  console.log('connected')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))
app.listen(4000, () => {
  console.log('listening')
})

const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')
const schema = require('./schema/schema')
const app = express()

mongoose.connect('mongodb+srv://admin:test1234@cluster0.u7yzp.mongodb.net/test?retryWrites=true&w=majority')
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

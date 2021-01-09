const graphql = require('graphql')
const Movie = require('../models/movie')
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema } = graphql

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parents, args) {
        return Movie.findById(args.id)
      }
    }
  }
  }
)
module.exports = new GraphQLSchema({
  query: RootQuery
})

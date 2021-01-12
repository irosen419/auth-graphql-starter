const graphql = require('graphql');
const UserType = require('./user_type');
const { GraphQLObjectType, GraphQLID } = graphql;
const UserTpe = require('./user_type')

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    currentUser: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    }
  }
});

module.exports = RootQueryType;

const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema,GraphQLID } = graphql;

//dummy data
var books = [
    {name: 'name of the wind', genre: 'Fantasy', id:'1'},
    {name: 'final empire', genre: 'Fantasy', id:'2'},
    {name: 'long earth', genre: 'Sci0fi', id:'3'}
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id : { type: GraphQLID}},
            resolve(parent, args) {
                args.id
                //code to get from db or source
                return _.find(books, {id: args.id});
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})

const express = require('express')
const graphqlHTTP = require('express-graphql')
const schemas = require('./schema/schema')

const app = express();

app.use('/graphql',graphqlHTTP({
    schema: schemas,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Now listening for request on port 4000');
})
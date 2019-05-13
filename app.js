const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect('mongodb://vital:test123@gql-react-db-shard-00-00-gn3we.mongodb.net:27017,gql-react-db-shard-00-01-gn3we.mongodb.net:27017,gql-react-db-shard-00-02-gn3we.mongodb.net:27017/test?ssl=true&replicaSet=gql-react-db-shard-0&authSource=admin&retryWrites=true', {useNewUrlParser: true})
    .then(
        () => { console.log('Connected to db'); },
        err => { console.log('Connection error', err);}
    );

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});


const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
    if (err) {
        return console.log('unable to connect to the database');
    }
    console.log('Connected to the mongodb server');





    db.collection('Todos').find().count().then(function(count) {
        console.log('number of todos: ', count);
    }, function(err) {
        console.log('unable to fetch the count');
    });

    // db.collection('Todos').find({
    //     _id: new ObjectID("58e421f462e3032d60fdd80f");
    // }).toArray().then(function(docs) {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, function(err) {
    //     console.log('unable to fetch the docs');
    // });


    // db.collection('Todos').find({'completed': false}).toArray().then(function(docs) {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, function(err) {
    //     console.log('unable to fetch the docs');
    // });



    db.close();
}); 
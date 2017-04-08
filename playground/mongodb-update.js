const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
    if (err) {
        return console.log('unable to connect to the database');
    }
    console.log('Connected to the mongodb server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('58e425f072bc85e51dc14c05')
    }, {
        $set: {
            completed: false
        }
    }, {
        returnOriginal: false
    }).then(function(res) {
        console.log(res)
    })



    // db.collection('Todos').find().count().then(function(count) {
    //     console.log('number of todos: ', count);
    // }, function(err) {
    //     console.log('unable to fetch the count');
    // });




    db.close();
}); 
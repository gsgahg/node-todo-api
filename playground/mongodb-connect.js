const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
    if (err) {
        return console.log('unable to connect to the database');
    }
    console.log('Connected to the mongodb server');


    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, function(err,result) {
    //     if (err) {
    //         return console.log('unable to insert todo');
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    db.collection('Users').insertOne({
        name: 'Jan',
        age: 27,
        location: 'Prague'
    }, function(err,result) {
        if (err) {
            return console.log('unable to insert user');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    
    db.close();
}); 
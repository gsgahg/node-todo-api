var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('./db/mongoose.js');
var Todo = require('./models/todo.js');
var User = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos', function(req, res) {
    var todo = new Todo.Todo({
        text: req.body.text
    });

    todo.save().then(function(doc){
        res.send(doc);
    }, function(e) {
        res.status(400).send(e);
    })
});

app.listen(3000, function() {
    console.log('server started on port 3000')
}); 










// In the model file (e.g. todo.js), 
// create the model schema, and export 
// it so that you can require it in 
// other parts of your app.
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var TodoSchema = new Schema ({
	task: String,
	description: String
});

var Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;

// get all todos
  app.get('/api/todos', function (req, res) {
    // find all todos in db
    Todo.find(function (err, allTodos) {
      res.json({ todos: allTodos });
    });
  });


// create new todo
  app.post('/api/todos', function (req, res) {
    // create new todo with form data (`req.body`)
    var newTodo = new Todo(req.body);

    // save new todo in db
    newTodo.save(function (err, savedTodo) {
      res.json(savedTodo);
    });
  });

  // get one todo
    app.get('/api/todos/:id', function (req, res) {
      // get todo id from url params (`req.params`)
      var todoId = req.params.id;

      // find todo in db by id
      Todo.findOne({ _id: todoId }, function (err, foundTodo) {
        res.json(foundTodo);
      });
    });
  // update todo
      app.put('/api/todos/:id', function (req, res) {
        // get todo id from url params (`req.params`)
        var todoId = req.params.id;

     // find todo in db by id
        Todo.findOne({ _id: todoId }, function (err, foundTodo) {
     // update the todos's attributes
          foundTodo.task = req.body.task;
          foundTodo.description = req.body.description;

       // save updated todo in db
          foundTodo.save(function (err, savedTodo) {
            res.json(savedTodo);
          });
        });
      });

      // update todo// get todo id from url params (`req.params`)// find todo in db by id// update the todos's attributes// save updated todo in db
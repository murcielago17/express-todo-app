var express = requires('express');
var app = express();
	

	// 1) create a server route to handle de POST request
	app.post('/api/todos', function(req,res){
		// 2) Create a new todo with form data
		var newTodo =req.body;


		// 3) set a sequential ID to the Todo
		if (todos.length > 0) {

			NewTodo._id = todos[todos.length - 1]._id + 1;
		} else {
			newTodo._id = 1;
		}


		// 4) add a new todo to the todos array
		todos.push(newTodo);


		// 5) Send new todo as JSON response
		res.json(newTodo);

	});
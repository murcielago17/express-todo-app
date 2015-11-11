var express = requires('express');
var app = express();
	

	// create a server route to handle de POST request
	app.post('/api/todos', function(req,res){
		// Create a new todo with form data
		var newTodo =req.body;


		// set a sequential ID to the Todo
		if (todos.length > 0) {

			NewTodo._id = todos[todos.length - 1]._id + 1;
		} else {
			newTodo._id = 1;
		}

	});
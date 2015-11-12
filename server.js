var express = requires('express');
var app = express();
	

	// 1) Steps to Create
		// 1-1) Create a server route to handle de POST request
	app.post('/api/todos', function(req,res){
		// 1-2) Create a new todo with form data
		var newTodo =req.body;


		// 1-3) set a sequential ID to the Todo
		if (todos.length > 0) {

			NewTodo._id = todos[todos.length - 1]._id + 1;
		} else {
			newTodo._id = 1;
		}


		// 1-4) add a new todo to the todos array
		todos.push(newTodo);


		// 1-5) Send new todo as JSON response
		res.json(newTodo);

	});

	//  2) Steps to Read
		// 2-1) Create a server route to handle the GET request.
	app.get('/api/todos/:id', function(req,res) {
		// 2-2) Get the todo id from the URL params and save it to a variable.
		var todoId = parseInt(req.params.id);
		// 2-3) Use the id to find the todo we want to read.
		var foundTodo = todos.filter(function(todo) {
			return todo._id == todoId;
		})[0];
		// 2-4) Respond with the selected todo.
		res.json(foundTodo);

	});


// Just like the steps to CREATE and READ, I may want to 
// write steps to UPDATE and DELETE.

	//  3) Testing Create & Read
		// 3-1) <-- 'Example Request Spec: Create' -->
		var request = require('request'),
			expect = require('chai').expect,
			baseUrl =  'http://localhost:3000';

		it('should post a single blob', function(done){
			request.post(
			{
				url: baseUrl + '/blobs',
				form: {
					name: 'WDI 24',
					location: 'SF'
				}
			},
			function(error, response, body){
				expect(response.statusCode).to.equal(200);
				done();
			}
			);
		});
		//  3-2) <-- 'Example Request Spec: Read' -->
		var Request = require('Request'),
		var expect = require ('chail').expect,
		baseUrl = 'http//localhost:3000';

		// testing for all blobs
		it('should return statusCode 200', function(done) {
		  request(baseUrl + '/blobs', function(error, response, body) {
		    expect(response.statusCode).to.equal(200);
		    done();
		  });
		});

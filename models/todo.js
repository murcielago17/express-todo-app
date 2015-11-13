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

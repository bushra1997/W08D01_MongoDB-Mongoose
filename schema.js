const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
  task: { type: String },
  description: { type: String },
  deadline: { type: Date },
  isCompleted: { type: Boolean },
  priority: { type: Number }
});

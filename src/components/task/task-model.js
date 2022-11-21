import mongoose from "mongoose";

const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: false,
  },
});

const Task = mongoose.model("task", taskSchema);

const findAll = async () => {
  const tasks = await Task.find();
  console.log("FIND ALL ==============", tasks);
};

const findById = async () => {
  const task = await Task.findById("637b35fe40b80fd913a48a24");
  console.log("FIND BY ID =========", task);
};

const updateById = async () => {
  const task = await Task.findByIdAndUpdate("637b35fe40b80fd913a48a24", {
    name: "Premier élément",
  });
  console.log("UPADATE BY ID ===========");

  findAll();
};

const deleteById = async () => {
  const task = await Task.findByIdAndDelete("637b35fe40b80fd913a48a24");
};

findAll();
findById();

export default Task;

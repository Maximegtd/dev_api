import mongoose from "mongoose";

const { Schema } = mongoose;
const exempleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  colors: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Exemple = mongoose.model("Exemple", exempleSchema);

// Exemple.create({
//   name: "Test product",
//   description: "Test",
//   colors: ["black", "red", "white"],
//   price: 1000,
// });

const findAll = async () => {
  const exemples = await Exemple.find({ name: "" });
  console.log("FIND ALL ==========", exemples);
};

const findById = async () => {
  const exemple = await Exemple.findById("63721c45e6bd5699fa4b0c6a");
  console.log("FIND BY ID ==========", exemple._id);
};

const updateById = async () => {
  const exemple = await Exemple.findById("63721c45e6bd5699fa4b0c6a");
  exemple.name = "Modification";
  exemple.save;
  console.log("FIND BY ID ==========", exemple._id);
  findAll();
};

const deleteById = async () => {
  const exemple = await Exemple.findByIdAndDelete("63721c45e6bd5699fa4b0c6a");
};

findAll();
findById();
updateById();
deleteById();

export default Exemple;

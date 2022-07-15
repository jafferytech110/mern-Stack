import mongoose from "mongoose";

// schema creation
const studentSchema = mongoose.Schema({
  registerationNumber: Number,
  name: String,
  grade: String,
  section: {
    type: String,
    default: "A",
  },
  subjects: [String],
});

// model creation
const student = mongoose.model("student", studentSchema);

export default student;

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./routes/student.js";

const app = express();

// json file cannot be greated than 20mb and extended true means everything goes through body parser
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());

app.use("/students", studentRoutes);

const CONNECTION_URL =
  "mongodb+srv://jafferyTech110:813XIers@cluster0.ocmuz.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

// connecting database and it returns a promise
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`connection is established and running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

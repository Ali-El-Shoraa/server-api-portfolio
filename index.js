require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 4000;
// const path = require("path");
const { connectDB } = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

// function to connect database
connectDB();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: false }));
//

// app.use(express.static(path.join(__dirname, "uploads")));

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
//
app.use("/api/projects", require("./routes/projectsRoute"));

app.use(errorHandler);

// server
app.listen(port, () => {
  console.log(`server started in port ${port}`);
});

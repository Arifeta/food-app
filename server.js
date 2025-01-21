const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
// const { connect } = require("mongoose");
const connectDb = require("./config/db");

// dotenv configuration
dotenv.config();

// rest object
const app = express();

// DB connection establishment
connectDb();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/restaurant", require("./routes/restaurantRoutes"));
app.use("/api/v1/category", require("./routes/categoryRoutes"));
app.use("/api/v1/food", require("./routes/foodRoutes"));

// route
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to food server</h1>");
});

const PORT = process.env.PORT || 8000;

// listen
app.listen(PORT, () => {
  console.log(`Node server running on port ${PORT}`.red.bgBlue);
});

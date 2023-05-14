require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { connect, connection } = require("mongoose");
// const connectDB = require("./config/database");
const methodOverride = require("method-override");
const logsController = require('./controllers/logsController')

// Database connection
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
connection.once("open", () => {
  console.log("connected to mongo!");
});

// View Engine Middleware Configure
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specify the views directory everytime we use the render method
app.set("views", "./views");
// This line tells the render method the default file extension to look for.
app.set("view engine", "jsx");

// Custom Middleware
app.use(express.urlencoded({ extended: false }));

//METHOD OVERRIDE
//after app has been defined
app.use(methodOverride("_method"));

app.use((req, res, next) => {
  console.log(`Custom Middleware running for all the routes`);
  next();
});

//Routes
//when the client makes a request to logs, the server will redirect to the controller router controllers
app.use("/logs", logsController);


// CATCH ALL ROUTE
app.get("/*", (req, res) => {
  res.redirect("/logs");
});


// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

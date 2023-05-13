require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const Logs = require("./models/logs");
const { connect, connection } = require('mongoose')
// const connectDB = require("./config/database");
const methodOverride = require("method-override");
// const Controller = require("./controllers/Controller");

// Database connection
connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  connection.once('open', ()=> {
    console.log('connected to mongo!')
  })

// View Engine Middleware Configure
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specific the views directory everytime we use the render method
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

// SEED ROUTE
// app.get("/seed", async (req, res) => {
//   try {
//     await Fruit.create([
//       {
//         title: "Captain",
//         entry: "Another productively day..",
//         shipIsBroken: true,
//       },
//       {
//         title: "Chief Engineer",
//         entry: "All engines working smoothly...",
//         shipIsBroken: false,
//       },
//       {
//         title: "Chief of Security",
//         entry: "Ship shields are at 100%..",
//         shipIsBroken: false,
//       },
//     ]);

//     res.redirect("/fruits");
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });



// Routes
//INDEX
app.get("/logs", async (req, res) => {
  console.log("Index Controller Func. running...");
  try {
    const foundLogs = await Logs.find({});
    // console.log('index logs', foundLogs)
    res.status(200).render("Index", { logs: foundLogs });
  } catch (err) {
    res.status(400).send(err);
  }
});

// NEW
//DEBUGGED I had the route as /logs/new and the middleware was running non-stop
app.get("/logs/new", (req, res) => {
  try {
    res.status(200).render("New");
  } catch (err) {
    res.status(400).send(err);
  }
});

//CREATE
app.post("/logs", async (req, res) => {
  try {
    req.body.shipIsBroken = req.body.shipIsBroken === "on";
    const newLog = await Logs.create(req.body);
    // console.log(newLog)
    res.redirect("/logs");
  } catch (err) {
    res.status(400).send(err);
  }
});

//SHOW
// app.get("/logs/:id", async (req, res) => {
//   try {
//     const foundLogs = await Logs.findById(req.params.id);
//     res.status(200).render("Show", { logs: foundLogs });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

//CATCH ALL ROUTE
app.get("/*", (req, res) => {
  res.redirect("/logs");
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

const express = require('express');
const router = express.Router();
const Logs = require('../models/logs')



// SEED ROUTE
router.get("/seed", async (req, res) => {
  try {
    await Logs.create([
      {
        title: "Today",
        entry: "Another productive day..",
        shipIsBroken: true,
      },
      {
        title: "Tonight",
        entry: "All engines working smoothly...",
        shipIsBroken: false,
      },
      {
        title: "Dusk",
        entry: "Ship shields are at 100%..",
        shipIsBroken: false,
      },
    ]);

    res.redirect("/");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Routes
//INDEX
router.get("/", async (req, res) => {
  console.log("Index Controller Func. running...");
  try {
    const foundLogs = await Logs.find({});
    console.log('index logs', foundLogs)
    res.status(200).render("Index", { logs: foundLogs });
  } catch (err) {
    res.status(400).send(err);
  }
});

// NEW
//DEBUGGED I had the route as /logs/new and the middleware was running non-stop
router.get("/new", (req, res) => {
  try {
    res.status(200).render("New");
  } catch (err) {
    res.status(400).send(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Logs.findByIdAndDelete(req.params.id);
    res.status(200).redirect("/logs");
  } catch (err) {
    res.status(400).send(err);
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    //turn the shipIsBroken prop into a boolean value
    req.body.shipIsBroken = req.body.shipIsBroken === "on";
    const foundLogs = await Logs.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log(foundLogs, "updated");
    // res.status(200).send(foundLogs)
    res.status(200).redirect(`/logs/${foundLogs._id}`);
  } catch (err) {
    res.status(400).send(err);
  }
});

//CREATE
router.post("/", async (req, res) => {
  try {
    //turn the shipIsBroken prop into a boolean value
    req.body.shipIsBroken = req.body.shipIsBroken === "on";
    const newLog = await Logs.create(req.body);
    // console.log(newLog)
    res.redirect("/logs");
  } catch (err) {
    res.status(400).send(err);
  }
});

//EDIT
router.get("/:id/edit", async (req, res) => {
  try {
    const foundLogs = await Logs.findById(req.params.id);
    // console.log(foundLogs)
    res.status(200).render("Edit", { logs: foundLogs });
  } catch (err) {
    res.status(400).send(err);
  }
});

//SHOW
router.get("/:id", async (req, res) => {
  try {
    const foundLogs = await Logs.findById(req.params.id);
    res.status(200).render("Show", { logs: foundLogs });
  } catch (err) {
    res.status(400).send(err);
  }
});


module.exports = router;
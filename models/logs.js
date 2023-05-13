const { Schema, model } = require("mongoose");

const logsSchema = new Schema(
  {
    title: String,
    entry: String,
    shipIsBroken: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Logs = model("Logs", logsSchema);

module.exports = Logs;

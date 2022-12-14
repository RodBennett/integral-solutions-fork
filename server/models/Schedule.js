const { Schema, model } = require("mongoose");

const scheduleSchema = new Schema(
  {
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
    startTime: {
      type: String,
    },
    endTime: {
      type: String,
    },
    locations: {
      type: Schema.Types.Array,
      ref: "Location"
    },
    users: {
      type: Schema.Types.Array,
      ref: "User",
    },
  },
);

const Schedule = model("Schedule", scheduleSchema);

module.exports = Schedule;
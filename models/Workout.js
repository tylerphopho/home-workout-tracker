const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema({
    day:{type: Date, default: Date.now},
    exercises: [{
        type: {
            type: String,
            required: "Choose a workout option"
        },
        name: {
            type: String,
            required: "What is the name of the workout?"
        },
        duration: {
            type: Number,
            required: "How many minutes do plan to workout for?"
        },
        weight: {
            type: Number,
            required: "What's your desired weight?"
        },
        reps: {
            type: Number,
            required: "How many reps are you gonna do?"
        },
        sets: {
            type: Number,
            required: "How many sets do you plan to do?"
        }
    }]
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
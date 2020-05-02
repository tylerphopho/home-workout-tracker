const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");


const PORT = process.env.PORT || 3001;
const app = express();

app.use(morgan("short"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://tylerphopho:password1@ds155087.mlab.com:55087/heroku_wzwwsj22", 
{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
},
() => console.log("Connected to MongoDB!")
);



require("./routes/apiRouting")(app);
require("./routes/htmlRouting")(app);

app.listen(PORT, () => {
    console.log(`Currently listening on http://localhost:${PORT}`)
})
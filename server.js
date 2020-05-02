const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");


const PORT = process.env.PORT || 3001;
const app = express();

app.use(morgan("short"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://tylerphopho:password1@ds111479.mlab.com:11479/heroku_3tw51gnw", 
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
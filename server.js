const express = require('express');
const errorHandlor = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnections');
const dotenv = require("dotenv").config();

const app = express();
connectDb();

const port = process.env.PORT || 5000;


// for responding response in json
app.use(express.json());

// if user hits /api/users this routes will called
app.use("/api/users", require("./routes/userRoutes"))
// category routes
app.use("/api/categories",require("./routes/categoryRoutes"))

//error handler middleware
app.use(errorHandlor);

app.listen(port, ()=>{
    console.log('app is running on '+port)
    let data = {
        "id":5,
        "nmae":"rajeev"
    }
    // console.table(data)
});


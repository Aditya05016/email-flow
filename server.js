const express = require('express');
const app = express();
const emailRoute = require("./routes/emailRoutes");
app.use("/", emailRoute);



app.use(express.json());




app.listen(3000,() => {
    console.log("Server is running on port 3000");
})
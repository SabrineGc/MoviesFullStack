const express = require("express");
const con =require('./mydatabase/index.js')
const path = require('path');
const app = express();
const port = 3001;
const cors =require ('cors');

app.use(cors());
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')));
const userRouter=require("./routes/userRoutes.js")
const movieRouter=require("./routes/moviesRoutes.js")
app.get("/",(req,res)=>{
  res.send("welcome to my addiction space")
});
app.use("/api/movies",movieRouter)
app.use("/api/users",userRouter)



app.listen(port, () => {
    console.log(`Express app listening on port http://localhost:${port}`);
  });
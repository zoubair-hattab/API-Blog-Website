const express= require("express");
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const authRouter=require("./routes/auth")
const userRouter=require("./routes/users")
const categoryRoute=require("./routes/categories")
const postRouter=require("./routes/posts.js")
const multer = require("multer");
const app=express();
dotenv.config();
app.use(express.json())
mongoose.connect(process.env.URL_DATABASE).then(()=>{
    console.log("Connected to Mongodb");
}).catch(err=>console.log(err));
// upload your images in folder name images 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });
app.use("/api/auth",authRouter);
app.use("/api/users",userRouter);
app.use("/api/posts",postRouter);
app.use("/api/categories", categoryRoute);

app.listen(3000,()=>{
    console.log("Backend is runing now on the port 3000")
})
import express from "express";
import connectDB from "./config/db.js";
import userRoute from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";


const app = express();
connectDB();

app.use(express.json());

app.listen(3000, () => {
  console.log("server listening on port 3000!!");
});


app.use('/api/user',userRoute);
app.use('/api/auth',authRouter);;

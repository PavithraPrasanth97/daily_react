import express from "express"; // import express    (Package install: npm init -y) (npm i express)
import {config} from "dotenv"; // import dotenv (npm i dotenv)
import { connect } from "mongoose"; // import mongoos (npm i mongoose)
import morgan from "morgan";// (npm i morgan) for http res and req
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import errorController from "./middlewares/errorController.js";
import authRoutes from "./routes/authRoutes.js";
import cookieParser  from "cookie-parser"; //(npm i cookieParser)
import protect from "./middlewares/protect.js";
import cors from "cors"; // (npm i cors) restricted resources on a web server to be requested from another domain




const server = express();
server.use(morgan("dev"));
config();
server.use(
    cors({
      origin: "http://localhost:3001",
      credentials: true,
    })
  );
  server.use(cookieParser());
server.use(express.json());


// Start the server
server.listen(process.env.PORT, () => {
    console.log("Server is running");
  });

// Define routes
server.get("/", (req, res) => {
    res.status(200).json({ message: "Successfully response gained" });
});


// Connect to the database
const DBConnection = async () => {
    try {
        await connect(process.env.MONGODB);
        console.log("Connected to database");
    } catch (err) {
        console.log("Database not connected", err.message);
    }
};

DBConnection();


// Use the controller function for /studentuser route
server.use("/auth",authRoutes);
server.use("/studentuser", protect, userRoutes);
// server.use("/auth",authRoutes);

server.use(errorHandler);
server.use("*", errorController);















    
    
    


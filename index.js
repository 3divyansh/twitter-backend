import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import tweetRoute from "./routes/tweetRoute.js";
import cors from "cors";

dotenv.config({
    path:".env"
})
databaseConnection();
const app = express(); 

// middlewares
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());
app.use(cookieParser());



// const corsOptions = {
//     origin:"http://localhost:3000",
//     credentials:true
// }
// app.use(cors(corsOptions));

const corsOptions = {
    origin: (origin, callback) => {
       
        if (!origin) return callback(null, true);
        return callback(null, true); 
    },
    credentials: true,
};

app.use(cors(corsOptions));



// const corsOptions = {
// 	origin : function (origin, callback) {
// 		if (['http://localhost:3000', 'https://localhost:3000'].includes(origin)) {
//                      callback(null, true)
//               } else {
//                      callback(new Error('Not allowed by CORS'))
//               }
// 	},
// 	credentials: true
// }
 
// app.use(cors(corsOptions));





// api
app.use("/api/v1/user",userRoute);
app.use("/api/v1/tweet", tweetRoute);
 

app.listen(process.env.PORT,() => {
    console.log(`Server listen at port ${process.env.PORT}`);
})
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
    path:"../config/.env"
})
const databaseConnection = () => {
    mongoose.connect("mongodb+srv://divyanshsoni:divyansh@divyansh.6jc07nb.mongodb.net/?retryWrites=true&w=majority&appName=Divyanshz").then(()=>{
        console.log("Connected to mongoDB");
    }).catch((error)=>{
        console.log(error);
    })
}
export default databaseConnection;

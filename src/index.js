import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({path:'./env'})


connectDB()

// (async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error",() => {
//         console.log("connection failed with database");
//        })
//        app.listen(process.env.PORT, () =>{
//         console.log(`server is running at port ${process.env.PORT}`)
//        })
//     } catch (error) {
//         console.error("ERROR", error);
//     }
// })()
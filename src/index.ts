import express from "express";
import dotenv from 'dotenv';
import initializeDB from "../config/dbConfig";
import cors from 'cors';

dotenv.config();

const app=express();
const PORT =process.env.PORT ||  3000;

app.use(express.json());
app.use(cors());


(async ()=>{
    await initializeDB();
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);

    });
})();

export default app; 
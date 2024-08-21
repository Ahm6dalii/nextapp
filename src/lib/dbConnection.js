
import { MongoClient } from "mongodb";

const mongoClient = new MongoClient("mongodb://localhost:27017/lab2");
const clientConnect = mongoClient.connect();


export default clientConnect;

import { MongoClient } from "mongodb";

const URI = "mongodb+srv://nicolassoaressantos:5WFoLQxqImaEJmXH@cluster0.h79cg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

await client.connect();

export const db = client.db("spotify");
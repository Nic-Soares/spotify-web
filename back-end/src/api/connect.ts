import { MongoClient } from "mongodb";

// Set MONGODB_URI on Render (Environment) or in a local .env, never in code
const URI = process.env.MONGODB_URI;
if (!URI) throw new Error("MONGODB_URI is not set");

const client = new MongoClient(URI);

await client.connect();

export const db = client.db("spotify");

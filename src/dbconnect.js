//import mongo tools/library
import { MongoClient, ServerApiVersion } from "mongodb";

//import credentials/connection string
import { uri } from "../credentials.js";

//Create  client at uri
export const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

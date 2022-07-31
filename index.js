import express from "express";
import { getVideoGames, addVideoGame } from "./src/functions.js";

const app = express();

const PORT = 4011;

app.use(express.json());

//Routes

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});
app.get("/videogames", getVideoGames);
app.post("/add-videogame", addVideoGame);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost: ${PORT}`);
});

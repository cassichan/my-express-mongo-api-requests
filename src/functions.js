import { client } from "./dbconnect.js";

export const getVideoGames = (req, res) => {
  client.connect((err) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    const collection = client
      .db("video-games")
      .collection("favorite-video-games"); //database.collection
    collection.find().toArray((err, result) => {
      if (err) res.status(500).send(err);
      if (result) res.json(result);
      client.close();
    });
  });
};

export const addVideoGame = (req, res) => {
  client.connect((err) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    const videoGame = req.body;
    const collection = client
      .db("video-games")
      .collection("favorite-video-games");
    collection.insertOne(videoGame, (err, result) => {
      if (err) res.status(500).send(err);
      if (result) res.json(result);
      client.close();
    });
  });
};

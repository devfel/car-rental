import express from "express";
const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

//Initiating Server
app.listen(3333, () => console.log("Server up and running!"));

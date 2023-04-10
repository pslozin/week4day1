const express = require('express')
const cors = require("cors");
const app = express()

app.use(express.json())
app.use(cors());

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
  });

  app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



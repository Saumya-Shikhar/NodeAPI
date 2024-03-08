import express from 'express';
import './db.js';
import routes from './Routes/index.js';
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    try {
      res.status(200).send({
        message: "Welcome"
      });
    } catch (error) {
      res.status(500).send({
        error: error.message
      });
    }
  });

app.use(routes);

app.listen(port,() => {
    console.log(`http://localhost:${port}`)
})
import express from "express";
import axios from "axios";

const app = express();
const port = 3003;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index.ejs", { secret: result.data.secret, user: result.data.username});
        console.log(result.data.secret);
      } catch (error) {
        res.status(404).send(error.message);
      }
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

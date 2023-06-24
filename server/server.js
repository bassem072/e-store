const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const initial = require("./app/services/initialService.service");
const dbConfig = require("./app/config/db.config");
const db = require("./app/models");
const Roles = db.role;

const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Bassem Elsayed application." });
});

require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/admin.routes")(app);
require("./app/routes/moderator.routes")(app);
require("./app/routes/category.routes")(app);
require("./app/routes/sub_category.routes")(app);

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to database.");
    await initial();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });

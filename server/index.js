const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const database = require("./config/database");
const authRouter = require("./routes/auth.js");
const aboutRouter = require("./routes/about.js");
const portfolioRouter = require("./routes/portfolio.js");
const blogRouter = require("./routes/blogPost.js");
const messageRouter = require("./routes/message.js");
const compression = require("compression");
const fetch = require("node-fetch");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));
app.use(
  compression({
    level: 6,
    threshold: 100 * 1000,
    filter: (req, res) => {
      if (req.headers["x-no-compression"]) {
        return false;
      } else {
        return compression.filter(req, res);
      }
    },
  })
);

setInterval(async () => {
  try {
    await fetch("https://www.utkubektasoglu.pro/");
    console.log("Ping sent to keep the website awake.");
  } catch (err) {
    console.error("Error while sending ping:", err);
  }
}, 5 * 60 * 1000); // 5 dakikada bir ping gönder

//!router
app.use("/", authRouter);
app.use("/", aboutRouter);
app.use("/", portfolioRouter);
app.use("/", blogRouter);
app.use("/", messageRouter);

database();
app.listen(process.env.PORT, () => {
  console.log("server is running", process.env.PORT);
});

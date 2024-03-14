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
dotenv.config();

const app = express();
app.use(
  cors({
    origin: [
      "portfolio-dynamic-admin-panel-web-site-seven.vercel.app",
      "https://www.utkubektasoglu.pro/",
    ],
  })
);
app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));
app.use("/", authRouter);
app.use("/", aboutRouter);
app.use("/", portfolioRouter);
app.use("/", blogRouter);
app.use("/", messageRouter);

database();
app.listen(process.env.PORT, () => {
  console.log("server is running", process.env.PORT);
});

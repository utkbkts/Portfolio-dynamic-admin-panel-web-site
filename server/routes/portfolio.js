const express = require("express");
const {
  createPortfolio,
  getPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../controllers/portfolio");

const router = express.Router();

router.post("/createPortfolio", createPortfolio);
router.get("/getPortfolio", getPortfolio);
router.put("/updatePortfolio", updatePortfolio);
router.delete("/deletePortfolio/:id", deletePortfolio);

module.exports = router;

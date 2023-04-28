var express = require("express");
var router = express.Router();

/* GET /api/search?q={searchTerm} */
router.get("/", function (req, res) {
  const { q } = req.query;

  const { products } = req.app.locals;

  const regexp = new RegExp(q, "i");

  const result = products.filter(x => regexp.test(x.name));

  res.json(result);
});

module.exports = router;
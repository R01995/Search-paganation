const express = require("express");
const router = express.Router();
const TestControllar = require("../controllar/TestControllar");
const ProductControllar = require("../controllar/ProductControlar")


router.get("/test", TestControllar.test);

router.get("/product-list/:pageNumber/:perPage/:searchKeyword", ProductControllar.ProductSearchAndPaiganation)


module.exports = router


const { Router } = require("express");
const siteController = require("../controllers/site.js")
const router = Router();

//site end points
router.post('/api/site', siteController.create)
router.put("/api/sites/:id", siteController.update);
router.delete("/api/site/:id", siteController.deleteSite);
router.get("/api/sites", siteController.findAll);
router.get("/api/site/:id", siteController.getSiteById);

module.exports = router;

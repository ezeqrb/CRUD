var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController')


router.get('/',productsController.welcome);
router.get('/create',productsController.createView );
router.post('/create',productsController.create);
router.get('/read',productsController.readView );
router.get('/update/:id',productsController.updateView);
router.post('/update/:id',productsController.update);
router.get('/delete/:id',productsController.delete);


module.exports = router;

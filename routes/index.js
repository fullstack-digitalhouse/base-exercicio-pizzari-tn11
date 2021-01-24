var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index );
router.get('/pizza', indexController.pizza );
router.get('/cadastrar', indexController.create);
router.post('/cadastrar', indexController.store);

module.exports = router;

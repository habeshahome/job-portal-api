var express = require('express');
var router = express.Router();
const { VerifyTokenMiddleware } = require('../middlewares/VerifyToken');

// importing menu controller 
const Menu = require('../controllers/MenuController')

router.get('/', VerifyTokenMiddleware, Menu._index)
router.post('/', Menu._create)
router.get('/:id', Menu._read)
router.put('/:id', Menu._update)
router.delete('/:id', Menu._delete)


module.exports = router;

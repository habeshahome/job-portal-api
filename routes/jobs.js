var express = require('express');
var router = express.Router();

// importing menu controller 
const Job = require('../controllers/JobController')

router.get('/', Job._index)
router.post('/', Job._create)
router.get('/:id', Job._read)
router.put('/:id', Job._update)
router.delete('/:id', Job._delete)
router.get('/search/:keyword', Job._search)


module.exports = router;

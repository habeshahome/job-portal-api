var express = require('express');
var router = express.Router();

// importing users controller 
const User = require('../controllers/UserController')
const JobPortfolio = require('../controllers/JobPortfolioController')
const JobApplication = require('../controllers/JobApplicationController')

router.get('/apply', JobApplication._index)
router.post('/apply', JobApplication._create)
router.get('/apply/:id', JobApplication._read)
router.put('/apply/:id', JobApplication._update)
router.delete('/apply/:id', JobApplication._delete)


router.get('/portfolio', JobPortfolio._index)
router.post('/portfolio', JobPortfolio._create)
router.get('/portfolio/:id', JobPortfolio._read)
router.put('/portfolio/:id', JobPortfolio._update)
router.delete('/portfolio/:id', JobPortfolio._delete)


router.get('/', User._index)
router.post('/', User._create)
router.get('/:id', User._read)
router.put('/:id', User._update)
router.delete('/:id', User._delete)

//router.get('/profile/:user_id',   )
//router.post('/profile',   )
//router.put('/profile/:user_id',   )
//router.delete('/profile/:user_id',    )



module.exports = router;


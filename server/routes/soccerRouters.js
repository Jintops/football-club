const express=require('express');

const router = express.Router();

const soccerController = require('../controllers/soccerController');

router.get('/',soccerController.homepage);
router.get('/exploremore',soccerController.explore)

module.exports=router;
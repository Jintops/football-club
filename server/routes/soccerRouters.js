const express=require('express');

const router = express.Router();

const soccerController = require('../controllers/soccerController');

router.get('/',soccerController.homepage);
router.get('/exploremore',soccerController.explore)
router.get('/about',soccerController.about)
router.get('/history',soccerController.history)
router.get('/players',soccerController.players)
router.get('/stadium',soccerController.stadium)
module.exports=router;
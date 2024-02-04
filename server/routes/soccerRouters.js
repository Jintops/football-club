const express=require('express');

const router = express.Router();

const soccerController = require('../controllers/soccerController');

router.get('/',soccerController.homepage);
module.exports=router;
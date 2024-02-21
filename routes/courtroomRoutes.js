// routes/courtroomRoutes.js
const express = require('express');
const router = express.Router();
const courtroomController = require('../controllers/courtroomController');

router.get('/case/:caseId', courtroomController.getCaseDetails);
router.post('/case/:caseId/evidence', courtroomController.submitEvidence);

module.exports = router;

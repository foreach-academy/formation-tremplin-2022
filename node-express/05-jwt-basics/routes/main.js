const express = require('express');
const router = express.Router();

const { dashboard, login } = require('../controllers/main.js');

const authMiddleware = require('../middleware/auth.js');

router.route('/login').post(login);
router.route('/dashboard').get(authMiddleware, dashboard);

module.exports = router;

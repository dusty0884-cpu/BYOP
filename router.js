const express = require('express');
const router = express.Router();

// Core API Logic
router.post('/audit', (req, res) => {
  const { userId, location, action } = req.body;
  console.log(`Action: ${action} for User: ${userId} at ${location}`);
  res.status(200).json({ status: 'Success', message: 'Data logged' });
});

module.exports = router;

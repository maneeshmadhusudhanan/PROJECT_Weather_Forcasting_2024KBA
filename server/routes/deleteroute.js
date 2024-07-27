// // Example backend route for deleting a location
// const express = require('express');
// const router = express.Router();
// const Location = require('../models/Location'); // Import your Location model

// // DELETE a location by ID
// router.delete('/locations/:id', async (req, res) => {
//   try {
//     const deletedLocation = await Location.findByIdAndDelete(req.params.id);
//     if (!deletedLocation) {
//       return res.status(404).json({ error: 'Location not found' });
//     }
//     res.json({ message: 'Location deleted successfully' });
//   } catch (err) {
//     console.error('Error deleting location:', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// module.exports = router;

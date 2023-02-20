const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();

router.post('/:id/wishlist', isLoggedIn, async (req, res) => {
    try {
        const { id } = req.session.user._id;
    } catch (error) {
        console.log(error);
        next(error);
    }
	


});

module.exports = router;

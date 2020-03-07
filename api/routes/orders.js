const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        msg: "ordersdata get"
    });
});

router.post('/', (req, res) => {
    res.json({
        msg: "orders posting"
    });
});

router.patch('/', (req, res) => {
    res.json({
        msg: "orders updated"
    });
});

router.delete('/', (req, res) => {
    res.json({
        msg: "orders deleted"
    });
});
module.exports = router;
const express = require('express');
const app = require('../app');

const router = express.Router();

router.get('/', (req,res) => {
    res.json({name: "Rick"})
})

module.exports= router
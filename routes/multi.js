const express = require('express')
const router = express.Router()

router.get('/about', (req,res) =>{
    res.render('aboutus')
})

router.use((req, res) => {
    res.status(404).render('404')
})

module.exports = router
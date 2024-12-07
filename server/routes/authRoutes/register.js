const express = require('express')
const router = express.Router()

router.post('/', ()=>{
    console.log("hello")
})


module.exports = router
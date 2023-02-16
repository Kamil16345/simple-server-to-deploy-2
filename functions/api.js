const express = require("express");
const app = express();
const serverless = require('serverless-http')
const router = express.Router()

router.get('/', (req,res)=>{
    res.json({
        'path':'Home',
        'firstName':'Kamil'
    })
})

router.get('/json', (req, res)=>{
    res.json({
        'path':'json',
        'author':'Kamil A.'
    })
})
app.use('/.netlify/functions/api', router)
module.exports.handler = serverless(app)
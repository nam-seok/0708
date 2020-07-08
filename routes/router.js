var router = require('express').Router()
var queryUtil = require('../utils/util')

router.get('/', async (req, res , next)=>{
    var result  = await queryUtil.queryAllData()
    var resultData  = await JSON.parse(result)
    
    console.log(resultData)
    // res.send(resultData)
    res.render('index', {data:resultData})
})

router.get('/' , (req, res, next)=>{
    res.render('index')
})

router.get('/searchdata', async (req, res , next)=>{
    console.log(req.query.search)
    var searchdata = req.query.search
    var result  = await queryUtil.queryData(searchdata)
    var resultData  = await JSON.parse(result)
    
    console.log(resultData)
    // res.send(resultData)
    res.render('searchdata', {data:resultData, KEY:searchdata})
})

module.exports = router;
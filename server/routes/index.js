const Router = require('express')
const router = new Router()
const studentRouter = require('./studentRouter')

router.use('/student', studentRouter)

module.exports = router
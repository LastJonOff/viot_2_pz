require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/api', router)

const start = async () => {
    try{
        await sequelize.sync(
            { force: false } //Reset db every time
        );
        app.listen(process.env.EXTERNAL_PORT)
    }catch (e) {
        console.log(e)
    }
}

start()
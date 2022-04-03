const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Student = sequelize.define('student', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true,},
    phone: {type: DataTypes.STRING},
    group: {type: DataTypes.STRING}
})

module.exports = {
    Student,
}
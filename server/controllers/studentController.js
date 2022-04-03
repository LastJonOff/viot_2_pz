const {Student} = require("../models/models");

class StudentController{
    async create(req, res) {
        const STUDENT = {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            phone: req.body.phone,
            group: req.body.group,
        }

        try {
            const student = await Student.create(STUDENT);
            console.log("OK createOne STUDENT: ", student);
            return res.status(201).json(student);
        } catch (error) {
            console.log('ERROR in createOne ' + "STUDENT:", error);
            return res.status(500).json(error);
        }
    }
    async getAll(req, res) {
        const students = await Student.findAll()
        return res.json(students)
    }
    async getOne(req, res){
        const {id} = req.params
        const student = await Student.findOne(
            {
                where: {id}
            }
        )
        return res.json(student)
    }
    async updateOne(req, res){
        const STUDENT = {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            phone: req.body.phone,
            group: req.body.group,
        }
        try {
            const student = await Student.update(STUDENT, {where: {id: req.params.id} });
            console.log("OK updateOne STUDENT: ", student);
            return res.status(200).json(student);
        } catch (error) {
            console.log('ERROR in updateOne ' + "STUDENT:", error);
            return res.status(500).json(error);
        }
    }

    async deleteOne(req, res){
        try {
            const student = await Student.destroy( {where: {id: req.params.id} });
            console.log("OK deleteOne STUDENT: ");
            return res.status(200).json(student);
        } catch (error) {
            console.log('ERROR in deleteOne ' + "STUDENT:", error);
            return res.status(500).json(error);
        }
    }
}


module.exports = new StudentController()
const express = require('express')
const person_routes = express.Router('/',(req,res)=>{})
const user_schema = require('../models/person.models.js')

person_routes.post('/person',(req,res)=>{
    const new_person = user_schema(req.body);
    new_person
        .save()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({message: err})
        });
});

person_routes.get('/person',(req,res)=>{
    user_schema
        .find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({message: err});
        });
});

person_routes.get('/:personId',(req,res)=>{
    const {personId} = req.params;
    user_schema
        .findById(personId)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({message: err});
        });
});

person_routes.put('/:personId',(req,res)=>{
    const {personId} = req.params;
    const {user_name, lastname, age, email, proffession, address_work} = req.body;
    user_schema
    .updateOne(
        {_id: personId},
        {$set: { user_name, lastname, age, email, proffession, address_work}}
    )
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.json({message: err});
    });
});

person_routes.delete('/:personId',(req,res)=>{
    const {personId} = req.params;
    user_schema
        .deleteOne({_id:personId})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({message: err});
        });
});

module.exports = person_routes
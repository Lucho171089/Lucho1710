const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
//using database config
const sequelize = require('../database');


//Dummy data
//const notes = [
//    {
//        id: 1,
 //       title: 'Dummy note',
//        content: 'This is a dummy note',
//    },
//];

//CRUD

//Handler o callback funciones,
router.get('/', async(req,res) => {
const notes = await sequelize.models.Notes.findAll();
return res.json(notes)
})

//Handler for list all notes
router.post('/', async(req,res) => {
    const {body} = req;
    const Note = await sequelize.models.Notes.create(
        {
            heading: body.heading, //Creating an instance of Notes
            content: body.content
        }
    );
    Note.save()
    return res.json({message: 'Created successfully', data: Note })
})

//Handler for update a specific note
router.put('/:id', async(req,res) => {
    //getting id from parameters
        const {body, params:{id} } = req;
        const Note = await sequelize.models.notes.findOne({id}); //Finding specific noted based on id
        if (!Note){
            return res.status(404),json({message: 'Note not found'});
        }
        //The new model with request changes
        const UpdatedNote = await Note.update({
            heading: body.heading, 
            content: body.content,
        });

        return res.json({message: 'Updated successfully', data: UpdatedNote});
})

//Handler for delete a specific note
router.delete('/:id', async(req,res) => {
    //Getting id from parameters
    const {params: {id} } = req;

    //Findings specific noted based on id
    const Note = await sequelize.models.Notes.findOne({id})
    if(!Note){
        return res.status(404).json({message: 'Note not found'});
    }

    //Destroying resource
    await Note.destroy();
    return res.json({message: 'Deleted successfully'});
})
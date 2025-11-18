import Note from "../Model/noteModel.js";

const createNote = async (req, res) => {
    try{
        const note = new Note({
            title : req.body.title,
            description : req.body.description
        });

        await note.save();
        res.status(201).send(note);
    } catch (error) {
        res.status(500).send("Error creating note");
    }
}

const getAllNotes = async (req, res) => {
    try{
        const notes = await Note.find({isDeleted : false});
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).send("Error fetching notes");
    }
}

const updateNote = async(req,res)=>{

    try{
        let noteDetail = req.body;
    
        const result = await Note.updateOne({_id : noteDetail.id} , {$set : {title : noteDetail.title, description: noteDetail.description}});
        //update count
        await Note.updateOne({_id : noteDetail.id}, {$inc: {updateCount: 1}});
        res.send("Note Updated successfully, Updated note: " + JSON.stringify(result));
    }
    catch(error){
        res.send(error);
    }
}



const deleteNote = async(req,res)=>{
    try{
        let note = req.body;
        console.log(note.data);
        //soft delete
        const result = await Note.updateOne({_id : note.data.id} , {$set : {isDeleted : true}});
        res.send("Note Deleted successfully, Deleted note: " + JSON.stringify(result));
    }
    catch(error){
        res.send(error);
    }
}

const getDeletedNotes = async(req,res)=>{
    try{
        const deletedNotes = await Note.find({isDeleted : true});
        res.status(200).json(deletedNotes);
    } catch (error) {
        res.status(500).send("Error fetching deleted notes");
    }
}

export {
    createNote,
    getAllNotes,
    updateNote,
    deleteNote,
    getDeletedNotes
}
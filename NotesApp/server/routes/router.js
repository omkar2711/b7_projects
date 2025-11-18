import { Router } from 'express'
import {   createNote, getAllNotes, updateNote, deleteNote, getDeletedNotes } from '../controller/noteController.js'

const noteRouter = Router();

noteRouter.get('/get-all-notes' , getAllNotes)

noteRouter.post('/create-note' , createNote)

noteRouter.patch('/update-note' , updateNote)

noteRouter.patch('/delete-note' , deleteNote)

noteRouter.get('/get-deleted-notes' , getDeletedNotes)


export default noteRouter;
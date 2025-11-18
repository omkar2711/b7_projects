
import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});


const getAllNotes = async () => {
    let response = await api.get('/note/get-all-notes');
    return response;
}

const createNote = async (noteData) => {
    let response = await api.post('/note/create-note', noteData);
    return response;
}

const updateNote = async (noteData) => {
    let response = await api.patch('/note/update-note', noteData);
    return response;
}

const deleteNote = async (noteId) => {
    let response = await api.patch(`/note/delete-note` , { data: { id: noteId } });
    return response;    
} 


export {
    createNote,
    getAllNotes,
    updateNote,
    deleteNote
}
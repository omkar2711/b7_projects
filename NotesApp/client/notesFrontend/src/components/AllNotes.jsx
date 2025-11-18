import React from 'react'
import EditNote from './editNote.jsx'
import { useEffect , useState } from 'react'
import { getAllNotes, deleteNote} from '../api/api.js'


const AllNotes = ({ note, setNote, editMode, setEditMode, noteToEdit, setNoteToEdit }) => {

    const [noteToDelete , setDeleteNote ] = useState(false);


    const handleDeleteNote = async (noteId) => {
        if (!noteId) {
            console.error('No note ID provided for deletion.');
            return;
        }

        try{
            const result = await deleteNote(noteId);
            setDeleteNote(!noteToDelete)
        }
        catch(error){
            console.error('Error deleting note:', error);
        }       
    }

    //get all notes from backend using
    useEffect(() => {
        // fetch notes from backend
        const fetchNotes = async () => {
            try {
                const response = await getAllNotes();
                const notes = response?.data || [];
                // update parent notes state
                setNote(notes);
                
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        };

        fetchNotes();
    }, [noteToDelete]);

    // If no notes and not in edit mode, show empty state. If editing, show editor even when list is empty.
    if(!Array.isArray(note) || note.length === 0){
        if (!editMode) {
            return <h2 className='text-center mt-6 text-gray-600'>No notes available. Please add some notes.</h2>
        }
    }


  return (
    <div>

        {editMode ? (
            <EditNote noteToEdit={noteToEdit} setEditMode={setEditMode} setNote={setNote} />
        ) : 
        <div>
      <h2 className="text-center mt-6 text-xl text-gray-600">All notes </h2>
        <div className='flex flex-wrap gap-4 justify-center'>
           {note?.map((n, idx) => (
                <div key={n?._id ?? n?.id ?? idx} className='w-1/4 m-2 bg-[#EFECE3] p-4 rounded-lg shadow-md'>
                    <h3>{n?.title}</h3>
                    <p>{n?.description}</p>

                    <div className='flex gap-4 mt-4'>
                        <button onClick={() => {setNoteToEdit(n); setEditMode(true);}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            edit
                        </button>
                        <button onClick={() => handleDeleteNote(n?._id ?? n?.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            delete
                        </button>
                    </div>
                    </div>
            ))}
        </div>
        </div>
}
    </div>
  )
}

export default AllNotes

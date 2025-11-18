import React from 'react'
import { useState, useEffect } from 'react'
import { updateNote } from '../api/api.js' 

const EditNote = ({ noteToEdit, setEditMode, setNote }) => {

    const [title, setTitle] = useState(noteToEdit?.title || '');
    const [description, setDescription] = useState(noteToEdit?.description || '');
    const [loading, setLoading] = useState(false);

    console.log('noteToEdit in EditNote:', noteToEdit);

    // Update local state when the selected note changes
    useEffect(() => {
        if (noteToEdit) {
            setTitle(noteToEdit.title ?? '');
            setDescription(noteToEdit.description ?? '');
        }
    }, [noteToEdit]);

    const handleEditNote = async () => {
        // Logic to edit the note with id noteIdToEdit
        try{
            setLoading(true);
            const idToSend = noteToEdit?._id ?? noteToEdit?.id;
            const result = await updateNote({
                id: idToSend,
                title: title,
                description: description
            });

            console.log('Note edited successfully:', result);

            // Update parent state so the UI reflects the edited note immediately
            if (typeof setNote === 'function') {
                setNote(prev => {
                    if (!Array.isArray(prev)) return prev;
                    return prev.map(n => {
                        const nid = n?._id ?? n?.id;
                        if (nid === idToSend) {
                            return {
                                ...n,
                                title,
                                description,
                                _id: n._id ?? n.id ?? idToSend,
                                id: n.id ?? n._id ?? idToSend
                            };
                        }
                        return n;
                    });
                });

            }

            setEditMode(false);
        
        }
        catch(error){
            console.error('Error editing note:', error);
        }
        finally{
            setLoading(false);
        }
    }
    return (
        <div className='flex flex-col bg-[#F8F4EC] mt-10'> 
            <h1 className='text-center'>Edit your Note</h1>
            <div className='flex flex-col gap-2 my-4 mx-auto w-1/2 bg-white rounded-lg p-4'>
                <label htmlFor='title'>Title:</label>
                <input
                    id='title'
                    type='text'
                    // placeholder='Enter the note title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor='description'>Description:</label>
                <textarea
                    id='description'
                    // placeholder='Enter the note description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button
                onClick={handleEditNote}
                className='bg-blue-500 text-white py-2 px-4 rounded w-1/2 mx-auto mb-6'
                disabled={loading}
            >
                {loading ? 'Editing...' : 'Edit Note'}
            </button>
            <button
                onClick={() => setEditMode(false)}
                className='bg-gray-400 text-white py-2 px-4 rounded w-1/2 mx-auto mb-6'
            >
                Close
            </button>
        </div>
    )
}

export default EditNote

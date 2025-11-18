import React, { useState } from 'react'
import { createNote } from '../api/api'


const AddNote = ({ note, setNote }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)

    const handleAddNote = async () => {
        // simple validation
        if (!title?.trim() && !description?.trim()) return

        const newNote = {
            title: title.trim(),
            description: description.trim(),
        }

        try {
            setLoading(true)
            const response = await createNote(newNote);

            const saved = response?.data;
            const noteToAdd = {
                _id: saved?._id ?? saved?.id ?? null,
                id: saved?._id ?? saved?.id ?? null,
                title: saved?.title ?? newNote.title,
                description: saved?.description ?? newNote.description,
            };

            // update parent state if setter available
            if (typeof setNote === 'function') {
                setNote(prevNotes => (Array.isArray(prevNotes) ? [...prevNotes, noteToAdd] : [noteToAdd]));
            }

            // clear inputs
            setTitle('')
            setDescription('')
        } catch (error) {
            console.error('Error adding note:', error)
            // Optionally surface error to UI
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='bg-[#F8F4EC]'>
            <div className='flex flex-col'>
                <div className='flex flex-col gap-2 my-4 mx-auto w-1/2 bg-white rounded-lg p-4'>
                    <label htmlFor='title'>Title:</label>
                    <input
                        id='title'
                        type='text'
                        placeholder='Enter the note title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor='description'>Description:</label>
                    <textarea
                        id='description'
                        placeholder='Enter the note description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button
                    onClick={handleAddNote}
                    className='bg-blue-500 text-white py-2 px-4 rounded w-1/2 mx-auto mb-6'
                    disabled={loading}
                >
                    {loading ? 'Adding...' : 'Add Note'}
                </button>
            </div>
        </div>
    )
}

export default AddNote

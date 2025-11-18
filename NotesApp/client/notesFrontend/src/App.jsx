import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddNote from './components/AddNote'
import AllNotes from './components/AllNotes'


function App() {

  const [note, setNote] = useState([]);
  const [editMode, setEditMode] = useState(false); //true
  const [noteToEdit, setNoteToEdit] = useState(null); //note object to edit

  return (

    <>
      {editMode === false && (
        <>
          <AddNote note={note} setNote={setNote} />
          <AllNotes note={note} setNote={setNote} editMode={editMode} setEditMode={setEditMode} noteToEdit={noteToEdit} setNoteToEdit={setNoteToEdit} />
        </>
      )}
      {editMode === true && (
        <>
          <AllNotes note={note} setNote={setNote} editMode={editMode} setEditMode={setEditMode} noteToEdit={noteToEdit} setNoteToEdit={setNoteToEdit} />
        </>
      )}
    </>
  )
}

export default App

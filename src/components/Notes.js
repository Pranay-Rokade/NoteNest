import React from 'react'
import NoteContext from '../context/notes/noteContext';
import { useContext } from 'react';
import Noteitem from './NoteItem';

const Notes = () => {
    const context = useContext(NoteContext);
    const {notes, setNotes} = context;
    return (
        <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note)=>{
            return <Noteitem key={note._id} note={note}/>
        })}
        </div>
    )
    }

export default Notes

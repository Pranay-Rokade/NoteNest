import React, { useContext, useEffect} from 'react'
import Noteitem from './NoteItem';
import AddNote from './AddNote';
import NoteContext from '../context/notes/noteContext';

const Notes = () => {
    const context = useContext(NoteContext);
    const {notes, getNotes} = context;
    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <AddNote/>
            <div className="row my-3">
            <h2>Your Notes</h2>
            {notes.map((note)=>{
                return <Noteitem key={note._id} note={note}/>
            })}
            </div>
        </>
    )
    }

export default Notes;

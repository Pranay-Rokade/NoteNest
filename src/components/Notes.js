import React, { useContext, useEffect, useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Noteitem from './NoteItem';
import AddNote from './AddNote';
import NoteContext from '../context/notes/noteContext';

const Notes = (props) => {
    const context = useContext(NoteContext);
    let navigate = useNavigate();
    const {notes, getNotes, editNote} = context;

    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes();
        }
        else{
            navigate("/login");
        }
    // eslint-disable-next-line
    }, []);
    const ref = useRef(null);
    const refClose = useRef(null);

    const [note, setNote] = useState({ id:"", etitle: "", edescription: "", etag: ""});

    const updateNote = (currentnote)=>{
        ref.current.click();
        setNote({id: currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag});
    }
    
    const handleClick = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
        props.showAlert("Updated the note successfully", "success");
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };
    return (
        <>
            <AddNote showAlert={props.showAlert}/>

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="my-3">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} area-descibedby="emailHelp" onChange={onChange} minLength={5} required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tag" className="form-label">Tag</label>
                                <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange}/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2>Your Notes</h2>
                <div className="container mx-1">
                    {notes.length===0 && 'No notes to display'}
                </div>
                {notes.map((note)=>{
                    return <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note}/>
                })}
            </div>
        </>
    )
    }

export default Notes;

import React, { useContext, useState } from "react";
import NoteContext from '../context/notes/noteContext';
import './AddNote.css'; // Import the CSS for styling

const AddNote = (props) => {
    const context = useContext(NoteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.showAlert("Added the note successfully", "success");
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <div className="container my-3 add-note-container">
            <h2 className="animate__animated animate__fadeIn" style={{color: "white"}}>Add a Note</h2>
            <form className="my-3 animate__animated animate__bounceIn" onSubmit={handleClick}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        name="title" 
                        value={note.title} 
                        onChange={onChange} 
                        minLength={3} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="description" 
                        name="description" 
                        value={note.description} 
                        onChange={onChange} 
                        minLength={5} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="tag" 
                        name="tag" 
                        value={note.tag} 
                        onChange={onChange} 
                        minLength={2} 
                        required 
                    />
                </div>
                <button 
                    disabled={note.title.length < 3 || note.description.length < 5} 
                    type="submit" 
                    className="add-note-button"
                >
                    <span className="button-content">
                        Add Note
                        <span className="button-icon"></span>
                    </span>
                </button>
            </form>
        </div>
    );
};

export default AddNote;
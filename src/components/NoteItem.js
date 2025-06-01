import React, { useContext, useRef } from 'react';
import NoteContext from '../context/notes/noteContext';
import './Noteitem.css';

const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="col-md-3">
      <div 
        ref={divRef}
        onMouseMove={handleMouseMove}
        className="card-spotlight note-card animate__animated animate__fadeIn" 
        style={{'--spotlight-color': 'rgba(125, 100, 255, 0.25)'}}
      >
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <div className="note-actions">
            <i className="fa-solid fa-trash mx-2" onClick={() => { deleteNote(note._id); props.showAlert("Deleted the note successfully", "success") }}></i>
            <i className="fa-regular fa-pen-to-square mx-2" onClick={() => { updateNote(note) }}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
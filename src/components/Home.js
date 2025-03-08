import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext';

const Home = () => {
  const context = useContext(NoteContext);
  const {notes, setNotes} = context;
  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" />
        </div>
        <button type="submit" className="btn btn-primary">Add Note</button>
      </form>
      <div className="container my-3">
      <h2>Your Notes</h2>
      {notes.map((note)=>{
        return note.title;
      })}
      </div>
    </div>
  )
}

export default Home

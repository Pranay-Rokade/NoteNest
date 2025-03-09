import React from 'react'

const Noteitem = (props) => {
  const {note} = props;
  return (
    <div className="col-md-3">
        <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
                <i className="fa-solid fa-trash mx-2"></i>
                <i className="fa-regular fa-pen-to-square mx-2"></i>
            </div>
        </div>
    </div>
  )
}

export default Noteitem

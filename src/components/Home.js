import Notes from './Notes';

const Home = () => {

  return (
    <div>
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
      </div>
      <Notes/>
    </div>
  )
}

export default Home

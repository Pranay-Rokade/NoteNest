import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert message="This is a message"/>
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
        </div>
      </Router>
    </NoteState>
    </>
  );
}

export default App;

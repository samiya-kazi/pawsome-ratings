import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './Pages/Home.page';
import PostPage from './Pages/Post.page';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

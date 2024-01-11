import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Components/header/Header'
import Movie from './Pages/movieDetail/movie';
import MovieList from './Components/movieList/movieList';
import Home from './Pages/home/home'
import Error from './Pages/error/error';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>} ></Route>
          <Route path='movie/:id' element={<Movie/>}></Route>
          <Route path='movies/:type' element={<MovieList/>} ></Route>
          <Route path='/*' element={<Error/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

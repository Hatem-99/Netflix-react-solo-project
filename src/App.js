import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar'
import Header from './components/Header'
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TvShows from './components/TvShows';
import Details from './components/Details';

function App() {
  return (
    <>
    <BrowserRouter>
    <MyNavbar></MyNavbar>
    <Header></Header>
    <Routes>
    <Route path='/tvshows' element={<TvShows/>}/>
    <Route path='/details/:movieId' element={<Details/>}/>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
   
  );
}

export default App;

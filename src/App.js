import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar'
import Header from './components/Header'
import MovieRow from './components/MovieRow';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <MyNavbar></MyNavbar>
    <Header></Header>
    <MovieRow moviesName="harry%20potter" rowName="Trinding Now"></MovieRow>
    <MovieRow moviesName="sherlock" rowName="Watch It Again"></MovieRow>
    <MovieRow moviesName="action" rowName="New Releases"></MovieRow>
    <Footer></Footer>
    </>
   
  );
}

export default App;

import { useParams } from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap'
import { useEffect, useState } from 'react';


const Details = () => {


const param = useParams()

const movieId = param.movieId
console.log(movieId)
const [movies, setMovies] = useState({})
const fetching = () => {
    fetch(`http://www.omdbapi.com/?apikey=cb573b58&i=${movieId}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data)
        setMovies(data);
      });
  };

useEffect(() => {
  fetching()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[movieId])



    return(<Container className='bg-netflix' fluid>
        <Row className='justify-content-center'>
        <Col xs={6}>
        <h2>{movies.Title}</h2>
        <img src={movies.Poster} alt={movies.Title} />
        <h3>the movie was released on the Year {movies.Year}</h3>
        <p>{movies.Plot}</p>
        
        </Col>
        </Row>

    </Container>)
}

export default Details;
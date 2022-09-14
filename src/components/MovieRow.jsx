import { useState, useEffect} from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link} from "react-router-dom";


const MovieRow = ({moviesName,rowName}) => {
 



  const [movies, setMovies] = useState({})
  const fetching = () => {
    fetch(`http://www.omdbapi.com/?apikey=cb573b58&s=${moviesName}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data)
        setMovies(data);
      });
  };

useEffect(() => {
  fetching()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

    return (
      <Container fluid className="bg-netflix pl-4 pt-4">
        <h2>{rowName}</h2>
        <Row>
          {movies.Search &&
           movies.Search.map((movie, index) => {
              return (
                <Col key={index} xs={6} md={4} lg={3} xl={2}>
                  <img
                    src={movie.Poster}
                    className="movie-img my-2 mx-2"
                    height={100}
                    width={200}
                    alt={movie.Title}
                  />{" "}
                  <Link to={`/details/${movie.imdbID}`}>
                  <Button>Details</Button>
                  </Link>
                </Col>
              );
            })}
        </Row>
      </Container>
    );
  
}

export default MovieRow;

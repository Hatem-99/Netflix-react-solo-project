import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class MovieRow extends Component {
  state = {
    movies: {},
  };
  fetching = () => {
    fetch(`http://www.omdbapi.com/?apikey=cb573b58&s=${this.props.moviesName}`)
      .then((data) => data.json())
      .then((data) => {
        this.setState({ movies: data });
      });
  };

  componentDidMount = () => {
    this.fetching();
  };
  render() {
    return (
      <Container fluid className="bg-netflix pl-4 pt-4">
        <h2>{this.props.rowName}</h2>
        <Row>
          {this.state.movies.Search &&
            this.state.movies.Search.map((movie, index) => {
              return (
                <Col key={index} xs={6} md={4} lg={3} xl={2}>
                  <img
                    src={movie.Poster}
                    className="movie-img my-2 mx-2"
                    height={100}
                    width={200}
                    alt={movie.Title}
                  />{" "}
                </Col>
              );
            })}
        </Row>
      </Container>
    );
  }
}

export default MovieRow;

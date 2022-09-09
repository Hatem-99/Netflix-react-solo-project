import { Component } from "react";
import { Col, Container, Row } from 'react-bootstrap'

class FirstRow extends Component{
    state ={
        movies: {}
    }
    fetching = () => {
       
           fetch("http://www.omdbapi.com/?apikey=cb573b58&s=harry%20potter")
           .then(data => data.json())
           .then(data => {this.setState({movies: data})
        console.log(this.state.movies.Search)})

     
    }

    componentDidMount = () => {
        this.fetching()
    }
    render(){


        return(<Container>
            <Row>
                
            {this.state.movies.Search.map((movie, index) =>  { return(<Col>
            <img src={movie.Poster} height={200} alt={movie.Title} /> </Col>)})}
                
            </Row>
        </Container>)
    }
}

export default FirstRow;
import { Component } from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";

class MyNavbar extends Component {
  render() {
    return (
      <Navbar className="bg-netflix " expand="lg">
        <Container>
          <Image src="data/netflix_logo.png" height={100}></Image>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-white" href="#home">Home</Nav.Link>
              <Nav.Link className="text-white" href="#link">TV Shows</Nav.Link>
              <Nav.Link className="text-white" href="#link">Movies</Nav.Link>
              <Nav.Link className="text-white" href="#link">Recently Add</Nav.Link>
              <Nav.Link className="text-white" href="#link">My List</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="icons d-flex align-items-center justify-content-around ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <span>Kids</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle ml-4 bg-netflix"
              type="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <Image src="data/avatar.png"  height={40}></Image>
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
           
            </div>
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default MyNavbar;

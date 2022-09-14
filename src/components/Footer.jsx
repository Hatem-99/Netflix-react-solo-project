/* eslint-disable jsx-a11y/anchor-is-valid */

const Footer = () => {
 
    return (
      <footer className="container-fluid pt-5 good bg-netflix">
        <div className="row justify-content-end gap ">
          <div className=" col-12 col-sm-6 col-md-3">
            <div className="d-flex flex-column align-items-start">
              <div className="row justify-content-start gap1">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-youtube"></i>
              </div>
              <ul className="nav flex-column ">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Audio and subtitles
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Media Center
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Priavcy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              <button type="button" className="btn btn-outline-dark">
                Service Code
              </button>
              <span> 1997-2019 netflix,Inc.</span>
            </div>
          </div>

          <div className="row">
            <div className=" col-12 col-sm-6 col-md-3">
              <ul className="nav flex-column justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Audio Description
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Investor Relations
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Legal Notices
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className=" col-12 col-sm-6 col-md-3">
              <ul className="nav flex-column justify-content-center">
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    Help Center
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Jobs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Cookies preference
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className=" col-12 col-sm-6 col-md-3">
              <ul className="nav flex-column justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Gift Cards
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Terms of Use
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Corporate information
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  
}

export default Footer;

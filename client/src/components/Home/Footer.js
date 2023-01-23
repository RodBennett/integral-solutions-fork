import { Link } from "react-router-dom";
import { Row, Col, Container, Nav,} from "react-bootstrap";
import "../../styles/footer.css";
import logo from "../../assets/images/logo.bkg.png";

function Footer () {
    return (       
    <footer >
        <div className="m-3">
        <h3 className="footer-title">
          Serving Greater Denver for Over 15 Years
        </h3> 
          <Row className="logo-phone-container">
            <Col className="logo-container">
              <img className='full-logo' src={logo}  alt="logo"></img>
            </Col>
            <Col className="m-0 footer-phone">
              <p className="number" style= {{marginTop:'30px'}}>(555)-555-5555</p>
              <p className="espanol">Se Habla Español!</p>
            </Col>

            <Col className="d-flex justify-content-center p-0 footer-nav">
              <Nav.Link className="footer-nav" as={Link} to="/shoplinks">
                Shop Furniture
              </Nav.Link>
              <Nav.Link className="footer-nav" as={Link} to="/contact">
                Contact Us{" "}
              </Nav.Link>
              <Nav.Link className="footer-nav" as={Link} to="/login">
                Employee Login 
              </Nav.Link>
            </Col>
          </Row>
          <p className="footer-copy">Copyright &copy;{new Date().getFullYear()} Integral Solutions LLC All Rights Reserved.</p>
        </div>
      </footer>)

}
export default Footer;
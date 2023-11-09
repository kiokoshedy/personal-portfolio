import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "..//utils/images/nav-icon1.svg";
import navIcon2 from "..//utils/images/nav-icon2.svg";
import navIcon3 from "..//utils/images/nav-icon3.svg";
import logo1 from "../utils/images/logo.png"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container >
        <Row className="align-items-center" >
          
          <Col size={20} sm={6}>
            <img src={logo1} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/shadrack-kioko/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.linkedin.com/in/shadrack-kioko/">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.linkedin.com/in/shadrack-kioko/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved by KiokoCodes. </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../utils/images/logo.svg";
import navIcon1 from "..//utils/images/nav-icon1.svg";
import navIcon2 from "..//utils/images/nav-icon2.svg";
import navIcon3 from "..//utils/images/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container >
        <Row className="align-items-center" >
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#navIcon1">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#navIcon2">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#navIcon3">
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

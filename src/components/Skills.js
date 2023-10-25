import meter1 from "../utils/images/meter1.svg";
import meter2 from "../utils/images/meter2.svg";
import meter3 from "../utils/images/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../utils/images/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Web development concept illustration" />
                  <h5>DevOps</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Brand Identity concept illustration" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Logo Design concept illustration" />
                  <h5>Spring Boot</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Development concept illustration" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Development concept illustration" />
                  <h5>Database</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Development concept illustration" />
                  <h5>Android/Ios</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Development concept illustration" />
                  <h5>Flutter</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Development concept illustration" />
                  <h5>React Native</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Colorful sharp geometric shapes background illustration" />
    </section>
  );
};

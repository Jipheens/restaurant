import Carousel from 'react-bootstrap/Carousel';
import edu from "./pics/edu.jpg"
import fernando from "./pics/fernando.jpg"
import sasha from "./pics/sasha.jpg"

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
3       <img style={{ width: 500, height: 830 }}
          className="d-block w-100"
          src={edu}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>5 star services</h3>
          <p>Maisha  Chini ya mnazi.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{ width: 500, height: 830 }}
          className="d-block w-100"
          src={fernando}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Impala</h3>
          <p>Live life at the top of it...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{ width: 500, height: 830 }}
          className="d-block w-100"
          src={sasha}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Late Night</h3>
          <p>
The beauty of the sun set
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
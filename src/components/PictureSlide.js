import Carousel from 'react-bootstrap/Carousel';

//Creating a carousel using react bootstrap store it inside the component function PictureSlide
export const PictureSlide = () => {
  return (
    <Carousel>
      {/* the interval prop specifies the time that each slide is shown for */}
      <Carousel.Item interval={700}>
        <img
        // d-block prevents browser default image alignment
          className='d-block w-100'
          src='/assets/karusell/beachsea.jpg'
          alt='First slide'
        />
      </Carousel.Item>

      <Carousel.Item interval={700}>
        <img
          className='d-block w-100'
          src='/assets/karusell/boheme2.jpg'
          alt='Second slide'
        />
        <Carousel.Caption className='carousel-text'></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='/assets/karusell/spice.jpg'
          alt='Third slide'
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className='d-block w-100'
          src='/assets/karusell/icehotelmain.jpg'
          alt='Fourth slide'
        />
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className='d-block w-100'
          src='/assets/karusell/josh-hild-b7szks7iIKg-unsplash.jpg'
          alt='Seventh slide'
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className='d-block w-100'
          src='/assets/karusell/nature_foodmain.jpg'
          alt='Eight slide'
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className='d-block w-100'
          src='/assets/karusell/romancec.jpg'
          alt='Ninth slide'
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className='d-block w-100'
          src='/assets/karusell/seaside_housemain.jpg'
          alt='Tenth slide'
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className='d-block w-100'
          src='/assets/karusell/seaside_clams.jpg'
          alt='Eleventh slide'
        />
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className='d-block w-100'
          src='/assets/karusell/stone.jpg'
          alt='Eleventh slide'
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className='d-block w-100'
          src='/assets/karusell/vitybar.jpg'
          alt='Tweleth slide'
        />
      </Carousel.Item>
    </Carousel>
  );
};

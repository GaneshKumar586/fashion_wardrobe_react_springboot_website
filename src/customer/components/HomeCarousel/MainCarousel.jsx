import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MainCarouselData from './MainCarouselData';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};


const MainCarousel = () => {
  const items = MainCarouselData.map((unit) => <img src={unit.img} alt ="" role="presentation" className='h-80 object-cover cursor-pointer'  />)

    return (
      <div className='max-height-60px'>
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls
          autoPlay={true}
          autoPlayInterval={2000}
          autoWidth
          // mouseTracking={true}
          infinite
          // responsive={responsive}
          // controlsStrategy="alternate"
        />
    </div>
      
    )
};

export default MainCarousel
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentIndex } from '../../actions/carousalAction';
import CarouselItem from '../baseComponents/carouselItem';
import withCarouselData from '../../hoc/withCarouselData';

const ImageCarousel = ({ images }) => {
  const dispatch = useDispatch();
  const currentIndex = useSelector(state => state.Tree.carousel.currentIndex);

  useEffect(() => {
    // Auto rotate images every 2 seconds
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      dispatch(setCurrentIndex(nextIndex));
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length, dispatch]);

  return (
    <div className='imageCarousel'>
      {images.map((image, index) => (
        <CarouselItem key={image.id} data={image} isActive={index === currentIndex} />
      ))}
    </div>
  );
};

export default withCarouselData(ImageCarousel);

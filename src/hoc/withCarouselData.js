import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImages } from '../actions/carousalAction';

const withCarouselData = WrappedComponent => {
  const CarouselData = () => {
    const dispatch = useDispatch();
    const images = useSelector(state => state.Tree.carousel.images);

    useEffect(() => {
      // Fetch images from API or local storage
      const fetchedImages = [
        {
          id: 1,
          url: 'https://picsum.photos/id/1018/536/354',
        },
        {
          id: 2,
          url: 'https://picsum.photos/id/1005/536/354',
        },
        {
          id: 3,
          url: 'https://picsum.photos/id/1025/536/354',
        },
        {
          id:4,
          url : 'https://picsum.photos/id/1024/536/354'
        },
        {
          id:5,
          url : 'https://picsum.photos/id/1023/536/354'
        },
        {
          id:6,
          url : 'https://picsum.photos/id/1022/536/354'
        },
        {
          id:7,
          url :'https://picsum.photos/id/1021/536/354'
        }
      ];
      dispatch(setImages(fetchedImages));
    }, [dispatch]);

    return <WrappedComponent images={images} />;
  };

  return CarouselData;
};

export default withCarouselData;

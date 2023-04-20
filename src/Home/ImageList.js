import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: '45vw', height: 'auto', overflow: 'hidden' }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: require('../static/IMG-5786.jpg'),
    title: 'Breakfast',
  },
  {
    img: require('../static/B7D6D29F-4941-469D-8FE6-18D84AE17566.JPG'),
    title: 'Burger',
  },
  {
    img: require('../static/IMG-9997.jpg'),
    title: 'Camera',
  },
  {
    img: require('../static/IMG-9237.jpg'),
    title: 'Coffee',
  },
  {
    img: require('../static/IMG-7465.jpg'),
    title: 'Hats',
  },
  {
    img: require('../static/39467973_2213171415362954_3688819459163684864_n.jpg'),
    title: 'Honey',
  },
  {
    img: require('../static/IMG-5296.jpg'),
    title: 'Basketball',
  },
  {
    img: require('../static/IMG-2638.jpg'),
    title: 'Fern',
  },
  {
    img: require('../static/IMG-0281.jpg'),
    title: 'Mushrooms',
  },
  {
    img: require('../static/IMG-0168.jpg'),
    title: 'Tomato basil',
  },
  {
    img: require('../static/CuteAddy.jpeg'),
    title: 'Sea star',
  },
  {
    img: require('../static/IMG-5786.jpg'),
    title: 'Bike',
  },
];
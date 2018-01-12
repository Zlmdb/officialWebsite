// import React from 'react';
// import { render } from 'react-dom';

// import Slider from './Slider/Slider';

// const IMAGE_DATA = [
//   {
//     src: require('./images/demo1.jpg'),
//     alt: 'images-1',
//   },
//   {
//     src: require('./images/demo2.jpg'),
//     alt: 'images-2',
//   },
//   {
//     src: require('./images/demo3.jpg'),
//     alt: 'images-3',
//   },
// ];

// render(
//   <Slider
//     items={IMAGE_DATA}
//     speed={1.2}
//     delay={2.1}
//     pause={true}
//     autoplay={true}
//     dots={true}
//     arrows={true}
//   />,
//   document.getElementById('root')
// );





var React = require('react');
var ReactDom = require('react-dom');
import Slider from './Slider/Slider';
import 'common/reset.css'

const IMAGE_DATA = [
  {
    src: require('./images/demo1.jpg'),
    alt: 'images-1',
  },
  {
    src: require('./images/demo2.jpg'),
    alt: 'images-2',
  },
  {
    src: require('./images/demo3.jpg'),
    alt: 'images-3',
  },
];

var deviceWidth = document.documentElement.clientWidth;
// if (deviceWidth > 640) deviceWidth = 640;
document.documentElement.style.fontSize = deviceWidth / 10 + 'px';

var mainCom = ReactDom.render(<Slider 
  items={IMAGE_DATA}
  speed={1.2}
  delay={2.1}
  pause={true}
  autoplay={true}
  dots={true}
  arrows={true}
/>,
  document.getElementById('app')
)

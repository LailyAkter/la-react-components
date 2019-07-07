import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://cdn.pixabay.com/photo/2014/09/07/16/53/hands-437968_960_720.jpg',
    altText: 'Slide 1',
    caption: 'We ',
    header: 'Slide 1 Header'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2019/05/21/19/39/grass-4219937_960_720.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2018/12/14/23/57/web-3876081_960_720.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const SliderComp = (props) => {
  return(
    <div className='container'>
      <UncontrolledCarousel items={items} />
    </div>
    )
}

export default SliderComp;
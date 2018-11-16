import React, { Component } from 'react';
import { Grid, Row, Col, Image, Carousel } from 'react-bootstrap';
import Slider from 'react-slick';

import '../../styles.scss';
import Images from '../../../theme/images';
import UiText from '../../../components/UiText';

let carousel_item = [
  {
    img: Images.carousel_1,
    text:
      'Willkommen bei zwopr!\
        Dein Netzwerk für kostenlose und\
        gegenseitige Unterstützung!',
  },
  {
    img: Images.carousel_2,
    text:
      'Gutes tun, glücklich sein!\
        Hilf anderen weiter und erhalte \
        die aufgebrachte Zeit auf \
        Deinem Zeit-Konto. ',
  },
  {
    img: Images.carousel_3,
    text:
      'Die Zeit für Deine gute Tat kannst Du nun bei anderen zwoprn für Deine Wünsche einlösen. ',
  },
  {
    img: Images.carousel_4,
    text:
      'Es gibt sicher viele zwopr, die Dir beiden kniffligen oder auch alltäglichen Dingen\
        weiterhelfen können!',
  },
  {
    img: Images.carousel_5,
    text:
      'Gegenseitig helfen macht glücklich!\
        Erkunde was andere zwopr in Deiner Stadt brauchen und anbieten!',
  },
];

class UiCarousel extends Component {
  render() {
    var settings = {
      arrows: false,
      fade: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

      customPaging: i => (
        <div
          style={{
            borderRadius: '50%',
            border: '2px solid white',

            width: '15px',
            height: '15px',
          }}
        >
          {' '}
        </div>
      ),
    };

    return (
      <Slider {...settings}>
        {carousel_item.map((data, index) => (
          <div key={index}>
            <img
              style={{ width: '300px', height: '300px', margin: 'auto' }}
              alt="900x500"
              src={data.img}
            />
            <UiText text={data.text} color={this.props.txt_color} padding={'0px 50px 30px 50px'}/>
            {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
          </div>
        ))}
        {/* <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="/carousel.png" />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="/carousel.png" />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
      </Slider>
    );
  }
}

export default UiCarousel;

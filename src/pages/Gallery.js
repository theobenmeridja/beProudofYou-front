import React, { Component } from 'react';
import '../stylesheets/gallery.css';
import NavigationBar from './NavigationBar.js';
import MyFooter from '../components/footer.jsx'
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Lightbox from 'react-images';
import ScrollAnimation from 'react-animate-on-scroll';

export default class MyGallery extends React.Component {

  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
      render() {
  	return (
      <div>
        <div>
          <NavigationBar/>
        </div>

        <div>
          <h2 style={{color:"#413c58", textAlign:"center"}} className="h1-responsive font-weight-bold my-5">
            Retrouver les photos de tous les projets accompagnés
          </h2>
        </div>


        <div>
          <ScrollAnimation animateIn="slideInUp" animateOnce="true">
            <Gallery className="allPhotos" onClick={this.openLightbox} margin={margin_set} photos={PHOTO_SET} />
            <Lightbox images={PHOTO_SET}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
            <MyFooter/>
          </ScrollAnimation>
        </div>
      </div>
  	);
      }
  }


  const margin_set = 7 ;

  const PHOTO_SET = [
    {
      src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
      width: 4,
      height: 3,
    },
    {
      src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
      width: 1,
      height: 1
    },
    {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3
  }
  ];

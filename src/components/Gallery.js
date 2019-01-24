import React, { Component } from 'react';
import '../stylesheets/gallery.css';
import NavigationBar from './NavigationBar.js';
import { render } from "react-dom";
import Gallery from "react-photo-gallery";

export default class MyGallery extends React.Component {
      render() {
  	return (
      <div>
        <div>
          <NavigationBar/>
        </div>

        <div>
          <h1 className="Title">Galerie</h1>
        </div>

        <div className="subtitle1">
          <h2>Retrouver les photos de tous les projets accompagnés</h2>
        </div>

        <div>
          <Gallery photos={PHOTO_SET} />
        </div>
      </div>
  	);
      }
  }

  const PHOTO_SET = [
    {
      src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
      width: 4,
      height: 3
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

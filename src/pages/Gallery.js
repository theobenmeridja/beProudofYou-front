import React from 'react';
import '../stylesheets/gallery.css';
import NavigationBar from './NavigationBar.js';
import MyFooter from '../components/footer.jsx'
import Gallery from "react-photo-gallery";
import Lightbox from 'react-images';
import ScrollAnimation from 'react-animate-on-scroll';


export default class MyGallery extends React.Component {

  constructor () {
    super()
    this.state = {
      projectData:[]
    }
  }

  componentDidMount(){

  var ctx = this;

  fetch('https://beproudofyou-backend.herokuapp.com/displayProjects')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    ctx.setState({projectData: data.projects});
  })
  .catch(function(error) {
    console.log('Request failed', error)
  });
  }

      render() {


        var ctx = this;
        var photoList = ctx.state.projectData.map(function(photo, i) {
          if(photo.adminAgree === true) {
         return  <Photo projectPhoto={photo.projectTitle}/>}
       } )



  	return (
      <div>
        <div>
          <NavigationBar style={{marginBottom: "110px"}}/>
        </div>

        <div>
          <h2 style={{color:"#413c58", textAlign:"center"}} className="h1-responsive font-weight-bold my-5">
            Retrouver les photos de tous les projets accompagnés
          </h2>
        </div>


        <div>
          <ScrollAnimation animateIn="slideInUp" animateOnce="true">
            <div class="container">
              <div class="row">
                {photoList}
              </div>
            </div>
          <MyFooter/>
          </ScrollAnimation>
        </div>
      </div>
  	);
  }
  }

  class Photo extends React.Component {

    constructor() {
      super();
      this.state = {
         currentImage: 0,
    };

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

      const PHOTO_SET = [
        {
          src: 'https://res.cloudinary.com/ddjeialc9/image/upload/'+this.props.projectPhoto.replace(/\s|[()#!?'"$%&*+-.:;<>@_{}€]/g, "")+'.jpg',
          width: 4,
          height: 3,
        },
      ];

      const margin_set = 7 ;

      return(
      <div class="col-lg-4 col-md-12 mb-4">
        <Gallery className="myPhotos" onClick={this.openLightbox} margin={margin_set} photos={PHOTO_SET} />
        <Lightbox images={PHOTO_SET}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
        <h3 className="titlePhoto">{this.props.projectPhoto}</h3>
      </div>
      )
    }
  }

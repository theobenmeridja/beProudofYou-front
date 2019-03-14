import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import '../react-modal-video/scss/modal-video.scss'
import { Link } from "react-router-dom";
import {Icon, Button, Row, Col, Card } from "antd";
import NavigationBar from './NavigationBar.js';
import Footer from '../components/footer.jsx';
import {Animated} from "react-animated-css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../stylesheets/landingPage.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import LeftArrow from '../images/left-arrow.svg';
import RightArrow from '../images/right-arrow.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import ProjectCardsLanding from './ProjectCardsLanding.js';
import { Motion, spring } from "react-motion";
import { MDBBtn,
         MDBCard,
         MDBCardBody,
         MDBCardImage,
         MDBCardTitle,
         MDBCardTextMDBCol,
         MDBContainer,
         MDBRow,
         MDBCol,
         MDBFooter,
         MDBIcon,
         MDBCardText,
         MDBInput,
       } from "mdbreact";


class LandingPage extends Component {

  constructor () {
    super()
    this.state = {
      isOpen: false,
      center: [0,20],
      zoom: 1,
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }




  render() {

    var projectData = [
      {id : "1",
        name:"Alex",
       sector: "Agriculture",
       description:"L'agriculture (du latin agricultura, composé à partir de ager, champ et colere, cultiver) est un processus par lequel les êtres humains aménagent leurs écosystèmes et contrôlent le cycle biologique d'espèces domestiquées, dans le but de produire des aliments et d'autres ressources utiles à leurs sociétés" },

      {id : "2",
        name:"Etienne",
       sector: "Retail",
       description: "Le commerce de détail est le maillon final de la chaîne de distribution. Il se distingue ainsi du commerce en gros."
        },

      {id : "3",
        name:"Philippe",
       sector: "Transports",
       description:"Le transport est le déplacement d'objets, de marchandises, ou d'individus d'un endroit à un autre. Les modes de transport incluent l'aviation, le chemin de fer, le transport routier, le transport maritime, le transport par câble, l'acheminement par pipe-line et le transport spatial"},

      {id : "4",
        name:"Wassima",
       sector: "Education",
       description:"L’éducation est étymologiquement :« guider hors de », c'est-à-dire développer, faire produire. Il signifie maintenant plus couramment l'apprentissage et le développement des facultés intellectuelles, morales et physiques, les moyens et les résultats de cette activité de développement"},

       { id : "5",
         name:"Etienne",
        sector: "Services",
        description: "Le commerce de détail est le maillon final de la chaîne de distribution. Il se distingue ainsi du commerce en gros."
         },

         { id : "6",
           name:"Moumousse",
          sector: "Technologie",
          description: "Le commerce de détail est le maillon final de la chaîne de distribution. Il se distingue ainsi du commerce en gros."
           },

    ];

    function RightNavButton(props) {
        const {className, style, onClick} = props
        return (
          <div
            className="slick-arrow"
            style={{...style, display: 'block', position: 'absolute', top: '50%', right:'4%', height: '20px', width: '20px', transform: 'translateY(-50%)'}}
            onClick={onClick}
          >
            <img onClick={onClick} src={RightArrow} style={{height:"20px", width:"20px"}} alt="arrow_right"/>
          </div>
        );
    }


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      className:'slides',
      centerMode: true,
      nextArrow: <RightNavButton/>,
      prevArrow: <img src={LeftArrow} style={{height:"20px", width:"20px"}} alt="arrow_left"/>,
      // autoplay: true,
      // autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            centerMode: false,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
            centerMode: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            centerMode: true,
            arrows: false
          }
        }
      ]
    };

    const { Meta } = Card;

    var projectLandingList = projectData.map(function(project, i) {
     return <ProjectCardsLanding projectId={project.id} projectName={project.name} projectSector={project.sector} description={project.description} projectNumber={i}/>;
   });

    return (
    <div>
      <div>
        <NavigationBar/>
      </div>


      <div className="firstFrame">
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <img id="logoStyle" src={require('../images/logo_blanc_Be_Proud_of_You.png')}/>
          <h1 className="titleBeProudOfYou">Be proud of You</h1>
          <h3 className="sloganBeProudOfYou">Soyez fiers d'accompagner nos micro-entrepreneurs</h3>
          <Link to="/About"><Button className="btn-Home-Desc" >Plateforme de dons, à but non lucratif, afin de soutenir la création de valeur au Togo </Button></Link>
        </Animated>
      </div>

      <ModalVideo style={{zIndex: "1"}}channel='youtube' isOpen={this.state.isOpen} videoId='-RDuYrCMCWc' onClose={() => this.setState({isOpen: false})} />

      <div className="secondFrame">

        <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
          <MDBContainer>
            <MDBRow style={{display:"flex",  alignItems:"center"}} top="true"> <MDBCol size="3" md="1" className="offset-md-1 mb-4 mt-5">
              <MDBIcon className="iconHand" size="3x" fixed icon="handshake" />
            </MDBCol>

              <MDBCol size="9" md="6" className="mb-4 mt-5">
                <MDBCard color="#fff8e1 amber lighten-5" text="unique-color-dark" className="text-center">
                  <MDBCardBody>
                    Contribuez au développement d'entrepreneurs locaux
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>

            <MDBRow style={{display:"flex",  alignItems:"center"}} top="true">
              <MDBCol size="3" md="1" className="offset-md-1 mb-4">
                <MDBIcon className="iconGift" size="3x" fixed icon="gift" />
              </MDBCol>

              <MDBCol size="6" md="6" className="mb-4">
                <MDBCard color="#fff8e1 amber lighten-5" text="unique-color-dark" className="text-center">
                  <MDBCardBody>

                    Recevez votre contrepartie personnalisée comme lien indélébile de votre action
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol size="3" md="2" className="offset-md-2 mb-4">
                <MDBIcon size="4x" fixed className="iconPlay" onClick={this.openModal} far icon="play-circle" />
              </MDBCol>
            </MDBRow>

            <MDBRow style={{display:"flex",  alignItems:"center"}} top="true">
              <MDBCol size="3" md="1"className="offset-md-1 mb-5">
                <MDBIcon z-index="1" className="iconComments" size="3x" fixed icon="comments" />
              </MDBCol>

              <MDBCol size="9" md="6" className="mb-5">
                <MDBCard color="#fff8e1 amber lighten-5" text="unique-color-dark" className="text-center">
                  <MDBCardBody>
                    Suivez quotidiennement l'avancée de leur projet
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </ScrollAnimation>
      </div>

      <div className="thirdFrame" style={{backgroundColor:"#FFFFFF"}}>
        <ScrollAnimation animateIn="bounceInDown" animateOnce="true">
          <Slider {...settings}>
            {projectLandingList}
          </Slider>
        </ScrollAnimation>
      </div>


      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Contactez nous
        </h2>
        <p className="text-center w-responsive mx-auto pb-5">
          Vous êtes micro-entrepreneur et vous voulez nous soumettre votre projet ? Vous êtes donateurs et vous souhaitez des nouvelles du projet que vous avez soutenu ? Be proud of You est à votre écoute et répondre au mieux à vos questions. N'hésitez surtout pas !
        </p>
        <MDBRow >
          <MDBCol lg="5" className="lg-0 mb-4">
            <MDBCard>
              <MDBCardBody>


                <MDBCard color="#1C2331 unique-color-dark" text="white" className="white-text mt-2 text-center">
                  <MDBCardBody style={{ fontSize:"25px"}}>
                    <MDBIcon size="1x" className="envelope" icon="envelope" />Ecrivez-nous
                  </MDBCardBody>
                </MDBCard>

                <p className="dark-grey-text mt-3">
                  Notre équipe est à votre écoute pour tous besoins d'informations
                </p>
                <div className="md-form">
                  <MDBInput
                    icon="user"
                    label="Nom"
                    iconClass="grey-text"
                    type="text"
                    id="form-name"
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    icon="envelope"
                    label="Email"
                    iconClass="grey-text"
                    type="text"
                    id="form-email"
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    icon="tag"
                    label="Sujet"
                    iconClass="grey-text"
                    type="text"
                    id="form-subject"
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    icon="pencil-alt"
                    label="Zone de texte"
                    iconClass="grey-text"
                    type="textarea"
                    id="form-text"
                  />
                </div>
                <div className="text-center">
                  <MDBBtn color="#1C2331 unique-color-dark">Envoyer</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="7">
            <div
              id="map-container"
              className="rounded z-depth-1-half map-container"
              style={{ height: "400px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDwtJYE9LFyQsx36G46nBC0rcijvCEenys&q=Lome"
                title="This is a unique title"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
              />
            </div>
            <br />
            <MDBRow className="text-center">
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="#1C2331 unique-color-dark" className="accent-1">
                  <MDBIcon className="envelope" icon="map-marker-alt" />
                </MDBBtn>
                <p>Lomé, 94126</p>
                <p className="mb-md-0">Togo</p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="#1C2331 unique-color-dark" className="accent-1">
                  <MDBIcon className="envelope" icon="phone" />
                </MDBBtn>
                <p>+33 6 10 73 75 32</p>
                <p className="mb-md-0">Lun - Ven, 10:00-20:00</p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="#1C2331 unique-color-dark" className="accent-1">
                  <MDBIcon className="envelope" icon="envelope" />
                </MDBBtn>
                <p>beproudofyou@gmail.com</p>
                <p className="mb-md-0">sale@gmail.com</p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>

      <Footer/>
      </div>
    )
  }
}

export default LandingPage;

import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import '../react-modal-video/scss/modal-video.scss'
import { Link } from "react-router-dom";
import { Button } from "antd";
import NavigationBar from './NavigationBar.js';
import Footer from '../components/footer.jsx';
import {Animated} from "react-animated-css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../stylesheets/landingPage.css';
import LeftArrow from '../images/left-arrow.svg';
import RightArrow from '../images/right-arrow.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import ProjectCardsLanding from './ProjectCardsLanding.js';
import { MDBBtn,
         MDBCard,
         MDBCardBody,
         MDBRow,
         MDBCol,
         MDBIcon,
         MDBInput,
       } from "mdbreact";


class LandingPage extends Component {

  constructor () {
    super()
    this.state = {
      isOpen: false,
      center: [0,20],
      zoom: 1,
      projectData:[],
      email: '',
      subject: '',
      name:'',
      textArea:''
    }
    this.openModal = this.openModal.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangeSubject = this.handleChangeSubject.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeTextArea = this.handleChangeTextArea.bind(this)
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value })
  }

  handleChangeSubject(event) {
    this.setState({ subject: event.target.value })
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value })
  }

  handleChangeTextArea(event) {
    this.setState({ textArea: event.target.value })
  }

  handleSubmit(){
    fetch('https://beproudofyou-backend.herokuapp.com/sendemail', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: 'name='+this.state.name+'&email='+this.state.email+'&subject='+this.state.subject+'&textArea='+this.state.textArea
    });
  }

  openModal () {
    this.setState({isOpen: true})
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


    function RightNavButton(props) {
        const { style, onClick} = props
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
      infinite: false,
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
            infinite: false,
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

    var ctx = this;
    var projectLandingList = ctx.state.projectData.map(function(project, i) {
      if (project.adminAgree === true){
     return <ProjectCardsLanding key={i} adminAgree={project.adminAgree} projectId={project._id} projectLeaderSurname={project.projectLeaderSurname} projectTitle={project.projectTitle} projectPhoto={project.projectTitle.replace(/\s|[()#!?'"$%&*+-.:;<>@_{}€]/g, "")}/>;
      }
   });

    return (
    <div>
      <div>
        <NavigationBar/>
      </div>


      <div className="firstFrame">
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <img id="logoStyle" alt="Logo de Be proud of You" src={require('../images/logo_blanc_Be_Proud_of_You.png')}/>
          <h1 className="titleBeProudOfYou">Be proud of You</h1>
          <h3 className="sloganBeProudOfYou">Soyez fiers d'accompagner nos micro-entrepreneurs</h3>
          <Link to="/About"><Button className="btn-Home-Desc" >Plateforme de dons, à but non lucratif, afin de soutenir la création de valeur au Togo </Button></Link>
        </Animated>
      </div>

      <ModalVideo style={{zIndex: "1"}}channel='youtube' isOpen={this.state.isOpen} videoId='uv9qBOtVOPg' onClose={() => this.setState({isOpen: false})} />

      <div className="secondFrame">
        <h2 style={{marginInlineEnd: "4%", fontSize: "5vmin"}}>Quel est notre but ? </h2>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce='true'>

          <div>
            <MDBIcon size="7x" fixed className="iconPlay" onClick={this.openModal} far icon="play-circle" />
          </div>


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
          Contactez - nous
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
                    <MDBIcon size="1x" className="envelope" icon="envelope" />Ecrivez - nous
                  </MDBCardBody>
                </MDBCard>

                <p className="dark-grey-text mt-3">
                  Notre équipe est à votre écoute pour tout besoins d'informations
                </p>
                <form onSubmit={this.handleSubmit}>
                  <div className="md-form">
                    <MDBInput
                      icon="user"
                      label="Nom"
                      iconClass="grey-text"
                      type="text"
                      id="form-name"
                      value={this.state.name}
                      onChange={this.handleChangeName}
                    />
                  </div>
                  <div className="md-form">
                    <MDBInput
                      icon="envelope"
                      label="Email"
                      iconClass="grey-text"
                      type="text"
                      id="form-email"
                      value={this.state.email}
                      onChange={this.handleChangeEmail}
                    />
                  </div>
                  <div className="md-form">
                    <MDBInput
                      icon="tag"
                      label="Sujet"
                      iconClass="grey-text"
                      type="text"
                      id="form-subject"
                      value={this.state.subject}
                      onChange={this.handleChangeSubject}
                    />
                  </div>
                  <div className="md-form">
                    <MDBInput
                      icon="pencil-alt"
                      label="Zone de texte"
                      iconClass="grey-text"
                      type="textarea"
                      id="form-text"
                      value={this.state.textArea}
                      onChange={this.handleChangeTextArea}
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn type="submit" color="#1C2331 unique-color-dark">Envoyer</MDBBtn>
                  </div>
                </form>
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
                <p>Lomé, Adidogomé - Amadahomé, Boulevard du 30 août</p>
                <p className="mb-md-0">Togo</p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="#1C2331 unique-color-dark" className="accent-1">
                  <MDBIcon className="envelope" icon="phone" />
                </MDBBtn>
                <p>+228 90 19 05 88</p>
                <p className="mb-md-0">7J/7, 08:00-22:00</p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="#1C2331 unique-color-dark" className="accent-1">
                  <MDBIcon className="envelope" icon="envelope" />
                </MDBBtn>
                <p>beproudofyoutogo@gmail.com</p>

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

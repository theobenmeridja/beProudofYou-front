import React, { Component } from 'react';
import '../stylesheets/projectGallery.css';
import NavigationBar from './NavigationBar.js';
import Footer from '../components/footer.jsx';
import ProjectCards from './projectCards.js';
import { MDBRow,
         MDBCol,
         MDBIcon,
       } from "mdbreact";
import ScrollAnimation from 'react-animate-on-scroll';

class ProjectGallery extends Component {
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
     var projectList = ctx.state.projectData.map(function(project, i) {
      return <ProjectCards adminAgree={project.adminAgree} projectId={project._id} projectLeaderSurname={project.projectLeaderSurname} projectTitle={project.projectTitle} projectShortDescription={project.projectShortDescription} projectPhoto={project.projectTitle.replace(/\s|[()#!?'"$%&*+-.:;<>@_{}€]/g, "")}/>;
    });


    return (
    <div style={{fontFamily: 'Roboto'}}>
    <div style={{marginBottom: "110px"}}>
      <NavigationBar/>
    </div>
    
      <section className="text-center my-5">
        <ScrollAnimation animateIn="rotateInDownLeft" animateOnce="true">
          <h2 style={{color:"#413c58"}} className="h1-responsive font-weight-bold my-5">
            Les projets des micro-entrepreneurs
          </h2>
          <p style={{paddingLeft:"10px", paddingRight:"10px"}} className="lead grey-text w-responsive mx-auto mb-5">
            Be proud of You est un projet associatif, sans but lucratif, soutenu par l'association Voisins Solidaires Togo ayant pour but de financer des micro entrepreneurs du secteur informel au Togo. Nous souhaitons casser les barrières d'accès au financement omniprésentes au Togo. L'ensemble des dons servent à financer l'entrepreneur et à vous envoyer votre contrepartie
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
          <MDBRow style={{paddingLeft:"10px", paddingRight:"10px"}}>
            <MDBCol md="4">
              <MDBIcon icon="fist-raised" size="3x" className="red-text" />
              <h5 style={{color:"#413c58"}} className="font-weight-bold my-4">Soutien</h5>
              <p className="grey-text  mb-md-0 mb-5">
                Choissisez le projet qui vous tient à coeur et le micro entrepreneur que vous voulez soutenir. Chaque projet relève de thèmes et objectifs différents, à vous de jouer !
              </p>
            </MDBCol>
            <MDBCol md="4">
              <MDBIcon icon="hand-holding-usd" size="3x" className="cyan-text" />
              <h5 style={{color:"#413c58"}} className="font-weight-bold my-4">Dons</h5>
              <p className="grey-text mb-md-0 mb-5">
                Le montant du don est totalement libre et sera de toute façon d'une grande aide pour le micro entrepreneur. Les dons sont reversés directement par notre association au porteur de projet
              </p>
            </MDBCol>
            <MDBCol md="4">
              <MDBIcon icon="gift" size="3x" className="orange-text" />
              <h5 style={{color:"#413c58"}} className="font-weight-bold my-4">Contrepartie</h5>
              <p className="grey-text  mb-md-0 mb-5">
                Recevez une contrepartie personnalisée, proposée par l'entrepreneur soutenu, en guise de remerciement. Vous pourrez d'ailleurs suivre ses avancées via notre blog
              </p>
            </MDBCol>
          </MDBRow>
        </ScrollAnimation>
      </section>


      <ScrollAnimation animateIn="rotateInUpLeft" animateOnce="true">
      <section id="articles" class="text-center py-5">

        <div class="container">
          <div class="row">
            {projectList}
          </div>
        </div>
      </section>
</ScrollAnimation>

      <Footer/>
        </div>
        );
      }
      }

  export default ProjectGallery;

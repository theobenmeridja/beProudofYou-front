import React, { Component } from 'react';
import '../stylesheets/projectGallery.css';
import NavigationBar from './NavigationBar.js';
import Footer from '../components/footer.jsx';
import {connect} from 'react-redux';
import ProjectCards from './projectCards.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
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
         MDBView,
         MDBMask,
         MDBCardFooter,
         MDBTooltip,
         MDBAvatar,
         MDBCardUp,
       } from "mdbreact";
import ProjectDescription from './ProjectDescription.js';

class ProjectGallery extends Component {


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


    const agricultureProjects =  projectData.filter(function(project, i) {
         return project.sector === "Agriculture";
       });



    console.log(agricultureProjects);


     var projectList = projectData.map(function(project, i) {
      return <ProjectCards projectId={project.id} projectName={project.name} projectSector={project.sector} description={project.description} projectNumber={i}/>;
    });


    return (
    <div>
      <NavigationBar/>

      <section className="text-center my-5">
        <h2 style={{color:"#413c58"}} className="h1-responsive font-weight-bold my-5">
          Les projets des micro entrepreneurs
        </h2>
        <p className="lead grey-text w-responsive mx-auto mb-5">
          Be proud of You est un projet associatif, sans but lucratif, soutenu par l'association Voisins Solidaires Togo ayant pour but de financer des micro entrepreneurs du secteur informel au Togo. L'ensemble des dons servent à financer l'entrepreneur et au maintien de la plateforme.
        </p>
        <MDBRow>
          <MDBCol md="4">
            <MDBIcon icon="fist-raised" size="3x" className="red-text" />
            <h5 style={{color:"#413c58"}} className="font-weight-bold my-4">Soutien</h5>
            <p className="grey-text ml-5 mb-md-0 mb-5">
              Choissisez le projet qui vous tient à coeur et le micro entrepreneur que vous voulez soutenir. Chaque projet relève de thèmes et objectifs différents, à vous de jouer !
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="hand-holding-usd" size="3x" className="cyan-text" />
            <h5 style={{color:"#413c58"}} className="font-weight-bold my-4">Dons</h5>
            <p className="grey-text mb-md-0 mb-5">
              Le montant du don est totalement libre et sera de toute façon d'une grande aide pour le micro entrepreneur. Les dons sont reversés directement par notre association au porteur de projet.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="gift" size="3x" className="orange-text" />
            <h5 style={{color:"#413c58"}} className="font-weight-bold my-4">Contrepartie</h5>
            <p className="grey-text mr-5 mb-md-0 mb-5">
              Recevez une vidéo, photographie ou poster personalisé du projet accompli de la part de l'entrepreneur en guise de remerciement. Vous pourrez d'ailleurs suivre ces avancées via notre blog ou notre chat !
            </p>
          </MDBCol>
        </MDBRow>
      </section>



      <section id="articles" class="text-center py-5">

        <div class="container">
          <div class="row">
            {projectList}
          </div>
        </div>
      </section>

      <Footer/>
        </div>
        );
      }
      }

  export default ProjectGallery;

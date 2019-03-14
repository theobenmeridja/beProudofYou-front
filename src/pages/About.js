import React, { Component } from 'react';
import '../stylesheets/about.css';
import { Link } from "react-router-dom";
import NavigationBar from './NavigationBar.js';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBAvatar } from "mdbreact";
import Footer from '../components/footer.jsx';


class About extends Component {

  render() {

    return (

    <div>
      <div>
        <NavigationBar/>
      </div>

      <div>
        <section className=" px-5 pb-5">
          <MDBCardBody>
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              Quelles sont nos actions ?
            </h2>
            <p className="text-center grey-text w-responsive mx-auto mb-5">
              <span style={{fontWeight:"bold"}}>Voisins Solidaires Togo</span>  est une association apolitique, à but non lucratif dont les interventions se résument en trois thématiques : la promotion de l'entrepreunariat au Togo, la solidarité de proximité et la solidarité internationale. L’association a pour but de faire de la solidarité un véritable moteur de développement durable.</p>
            <MDBRow>
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img
                    className="img-fluid"
                    src={require('../images/présentation.png')}
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7">
                <a href="#!" className="green-text">
                  <h6 className="font-weight-bold mb-3">
                    <MDBIcon icon="suitcase" className="pr-2" />
                    Be proud of You et le projet PAPASI
                  </h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>Promotion de l'entrepreunariat</strong>
                </h3>
                <p>
                  <span style={{fontWeight:"bold"}}>- Be proud of You</span> a pour but de financer des micro entrepreneurs du secteur informel au Togo. Le projet a pour but de casser les barrières au financement de projets et permettre aux plus démunis de se lancer dans l'aventure entrepreneurarial grâce au financement participatif. Le projet est lancé en avril 2019.
                </p>
                <p>
                  <span style={{fontWeight:"bold"}}>-</span>  VS Togo a lancé en mars 2013, le <span style={{fontWeight:"bold"}}>Projet d’Assistance à la Professionnalisation des Acteurs du Secteur Informel</span> (PAPASI).
                  45 micro entrepreneurs (couturière, coiffeuse, tailleur, mécanicien…) ont ainsi bénéficié de cours de gestion, leur permettant à l’issue de 3 mois de formation de mieux gérer leur activité.
                  La deuxième édition du PAPASI a eu lieu en 2017 avec le soutien des volontaires étudiants français de l’ESCE-Paris.
                </p>
                <MDBBtn href="http://www.voisinsolidairetogo.org/" target="_blank" color="success" size="md" className="waves-light ">
                  En voir plus
                </MDBBtn>
              </MDBCol>
            </MDBRow>
            <hr className="my-5" />
            <MDBRow>
              <MDBCol lg="7">
                <a href="#!" className="pink-text">
                  <h6 className="font-weight-bold mb-3">
                    <MDBIcon icon="user-friends />" className="pr-2" />
                    La fêtes des Voisins
                  </h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>Solidarité de proximité</strong>
                </h3>
                <p>
                  Au Togo, la notion de voisinage ne se limite pas aux voisins immédiats mais s’étend à tout un quartier et même d’un quartier à l’autre.
                </p>
                <p>
                  Il fut un temps, les habitants des quartiers vivaient comme appartenant à une même famille. De nos jours, tel n’est plus le cas. Le lien social est de moins en moins fort dans notre société.
                </p>
                <p>
                  VS Togo a ainsi initié le projet d’une <span style={{fontWeight:"bold"}}>« Fête des Voisins »</span>  premier du genre sur  le continent africain, afin de développer la convivialité et la solidarité de voisinage. Cette fête est organisée une fois par an (fin mai) et rassemble les voisins d’un même quartier.
                </p>
                <MDBBtn
                  color="pink"
                  size="md"
                  className="mb-lg-0 mb-4 waves-light"
                  href="http://www.voisinsolidairetogo.org/" target="_blank"
                >
                  En voir plus
                </MDBBtn>
              </MDBCol>
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
            </MDBRow>
            <hr className="my-5" />
            <MDBRow>
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img
                    className="img-fluid"
                    src={require('../images/gotogo.JPG')}
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7">
                <a href="#!" className="indigo-text">
                  <h6 className="font-weight-bold mb-3">
                    <MDBIcon icon="heartbeat" className="pr-2" />
                    Projet "Go Togo" et projet "COUPEabilité""
                  </h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>Solidarité internationale</strong>
                </h3>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia
                  sit amet.
                </p>
                <MDBBtn href="http://www.voisinsolidairetogo.org/" target="_blank" color="indigo" size="md" className="waves-light ">
                  En voir plus
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </section>
      </div>

      <div>
        <section className="text-center mx-5 my-5">
          <h2 className="h1-responsive font-weight-bold my-5">
            Nos partenaires
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            C'est grâce à nos partenaires que nos actions sont réalisables. Aussi bien comme appui local de nos initiatives ou bien soutient à l'international, ils contribuent à la réussite de Be proud of You.
            Ils nous permettent de dénicher les entrepreneurs motivés, les sensibilisent à notre outil et communiquent autour de leur projet pour que leur campagne de financement aboutisse.
          </p>

          <MDBRow className="text-center">
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView className="overlay rounded z-depth-1" waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <h4 className="font-weight-bold my-3">Africa Co-Workers</h4>
                <p className="grey-text">
                  Africa Coworkers est un regroupement de jeunes entrepreneurs africains dont la vision est d'entreprendre autrement. Ils forment et organisent des conférences ou évènements pour apporter des solutions palpables aux entrepreneurs Togolais.
                </p>
                <MDBBtn color="indigo" size="sm">
                  <MDBIcon far icon="clone" className="left" /> Plus d'infos
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView className="overlay rounded z-depth-1" waves>
                <img
                  src={require('../images/faiej-2.png')}
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <h4 className="font-weight-bold my-3">FAIEJ</h4>
                <p className="grey-text">
                  Le fond d'appui aux initiatives économiques des jeunes est un dispositif intégré d’appui technique et financier du gouvernement togolais qui vise l’insertion socioprofessionnelle des jeunes à travers la promotion de l’entrepreneuriat.
                </p>
                <MDBBtn color="indigo" size="sm">
                  <MDBIcon far icon="clone" className="left" /> Plus d'infos
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView className="overlay rounded z-depth-1" waves>
                <img
                  src={require('../images/edm1.png')}
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <h4 className="font-weight-bold my-3">Entrepreneurs du monde</h4>
                <p className="grey-text">
                  Entrepreneurs du Monde accompagne l’insertion économique des familles en situation de grande précarité et leur facilite l’accès à des biens et services essentiels. Ainsi, ces familles gagnent en autonomie et améliorent leurs conditions de vie.
                </p>
                <MDBBtn color="indigo" size="sm">
                  <MDBIcon far icon="clone" className="left" /> Plus d'infos
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </section>
      </div>



      <div>
        <section className=" px-5 pb-1 text-center">
          <MDBCardBody>
            <h2 className="h1-responsive font-weight-bold my-5">
              Notre équipe
            </h2>
            <p className="grey-text w-responsive mx-auto mb-5">
              L'association Voisins Solidaires Togo compte plus de 20 membres actifs travaillant toute l'année pour le dévellopement des projets locaux. Ils acceuillent chaque année depuis près de 10 ans, des volontaires du monde entier pour dévelloper des projets à forte valeur ajoutée.
            </p>
            <MDBRow className="text-md-left">
              <MDBCol lg="6" md="12" className="mb-5">
                <MDBCol md="4" lg="6" className="float-left">
                  <img
                    src={require('../images/photoThéo.jpg')}
                    width= "250vh"
                    className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                    tag="img"
                    alt="Sample avatar"
                  />
                </MDBCol>
                <MDBCol md="8" lg="6" className="float-right">
                  <h4 className="font-weight-bold mb-3">Théo Benmeridja</h4>
                  <h6 className="font-weight-bold grey-text mb-3">
                    Initiateur de Be proud of You
                  </h6>
                  <p className="grey-text">
                    Diplômé d'école de commerce et développeur FullStack par la suite, Théo est volontaire au sein de Voisins Solidaires Togo afin de créer la plateforme Be proud of You.
                  </p>
                  <p style={{fontSize:"15px"}} className="p-2 fa-lg gplus-ic">
                    <MDBIcon fab icon="whatsapp" /> +33610737532
                  </p>
                  <p style={{fontSize:"15px"}} href="#!" className="p-2 fa-lg email-ic">
                    <MDBIcon icon="envelope" /> benmeridjatheo@gmail.com
                  </p>
                </MDBCol>
              </MDBCol>

              <MDBCol lg="6" md="12" className="mb-5">
                <MDBCol md="4" lg="6" className="float-left">
                  <img
                    width= "250vh"
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                    className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                    tag="img"
                    alt="Sample avatar"
                  />
                </MDBCol>
                <MDBCol md="8" lg="6" className="float-right">
                  <h4 className="font-weight-bold mb-3">Florent Kpapou Fare</h4>
                  <h6 className="font-weight-bold grey-text mb-3">
                    Président de Voisins Solidaires Togo
                  </h6>
                  <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                    eos id officiis hic tenetur.
                  </p>
                  <p style={{fontSize:"15px"}} className="p-2 fa-lg gplus-ic">
                    <MDBIcon fab icon="whatsapp" /> +33610737532
                  </p>
                  <p style={{fontSize:"15px"}} href="#!" className="p-2 fa-lg email-ic">
                    <MDBIcon icon="envelope" />
                  </p>
                </MDBCol>
              </MDBCol>

              <MDBCol lg="6" md="12" className="mb-5">
                <MDBCol md="4" lg="6" className="float-left">
                  <img
                    width= "250vh"
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                    className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                    tag="img"
                    alt="Sample avatar"
                  />
                </MDBCol>
                <MDBCol md="8" lg="6" className="float-right">
                  <h4 className="font-weight-bold mb-3">Guillaume Fare</h4>
                  <h6 className="font-weight-bold grey-text mb-3">
                    Trésorier de Voisins Solidaires Togo
                  </h6>
                  <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                    eos id officiis hic tenetur.
                  </p>
                  <p style={{fontSize:"15px"}} className="p-2 fa-lg gplus-ic">
                    <MDBIcon fab icon="whatsapp" /> +33610737532
                  </p>
                  <p style={{fontSize:"15px"}} href="#!" className="p-2 fa-lg email-ic">
                    <MDBIcon icon="envelope" />
                  </p>
                </MDBCol>
              </MDBCol>

              <MDBCol lg="6" md="12" className="mb-5">
                <MDBCol md="4" lg="6" className="float-left">
                  <img
                    width= "250vh"
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(29).jpg"
                    className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                    tag="img"
                    alt="Sample avatar"
                  />
                </MDBCol>
                <MDBCol md="8" lg="6" className="float-right">
                  <h4 className="font-weight-bold mb-3">Ismaël</h4>
                  <h6 className="font-weight-bold grey-text mb-3">
                    Membre actif de Voisins Solidaires
                  </h6>
                  <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                    eos id officiis hic tenetur.
                  </p>
                  <p style={{fontSize:"15px"}}  className="p-2 fa-lg gplus-ic">
                    <MDBIcon fab icon="whatsapp" /> +33610737532
                  </p>
                  <p style={{fontSize:"15px"}} href="#!" className="p-2 fa-lg email-ic">
                    <MDBIcon icon="envelope" />
                  </p>
                </MDBCol>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </section>
      </div>

      <Footer/>

    </div>
    );
  }
}



export default About;

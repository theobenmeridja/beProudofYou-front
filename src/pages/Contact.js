import React, { Component } from 'react';
import '../stylesheets/footer.css';
import NavigationBar from './NavigationBar.js';
import Footer from '../components/footer.jsx';
import { MDBBtn,
         MDBCard,
         MDBCardBody,
         MDBRow,
         MDBCol,
         MDBIcon,
         MDBInput,
       } from "mdbreact";

   class Contact extends Component {

     constructor () {
       super()
       this.state = {
         email: '',
         subject: '',
         name:'',
         textArea:''
       }
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


        render() {

           return (
             <div>
               <div>
                 <NavigationBar/>
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
                         <p>Lomé, Adidogomé - Améhomé, Boulevard du 30 août</p>
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

           );
         }
       }

export default Contact;

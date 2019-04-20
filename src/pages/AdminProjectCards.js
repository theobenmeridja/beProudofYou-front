import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../stylesheets/adminProjectCards.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Image } from 'cloudinary-react';
import { MDBBtn,
         MDBContainer,
         MDBModal,
         MDBModalBody,
         MDBModalFooter
       } from "mdbreact";


class AdminProjectCards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayButton: this.props.adminAgree,
      modal: false,
    };
    this.updateDisplayProject = this.updateDisplayProject.bind(this)
    this.updateNoDisplayProject = this.updateNoDisplayProject.bind(this)
    this.displayButton = this.displayButton.bind(this)
    this.removeProject = this.removeProject.bind(this)
  }

  removeProject(){
    fetch('https://beproudofyou-backend.herokuapp.com/removeProject', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: '_id='+this.props.projectId
    });
    this.setState({
      modal: !this.state.modal
    });
}

  updateDisplayProject(){
    fetch('https://beproudofyou-backend.herokuapp.com/updateDisplayProject', {
  method: 'PUT',
  headers: {'Content-Type':'application/x-www-form-urlencoded'},
  body: 'adminAgree=true&_id='+this.props.projectId,
    });
  }

  displayButton(){
    this.setState({
      displayButton: !this.state.displayButton
    })
  }

  updateNoDisplayProject(){
    fetch('https://beproudofyou-backend.herokuapp.com/updateDisplayProject', {
  method: 'PUT',
  headers: {'Content-Type':'application/x-www-form-urlencoded'},
  body: 'adminAgree=false&_id='+this.props.projectId,
    });
    this.setState({
      displayButton: true
    })
  }

  toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}


  render() {

    return (

      <div class="col-lg-4 col-md-12 mb-4">
        { this.state.displayButton ?
          <h4 className="financing">En cours de financement</h4> :
          <h4 className="pending">En attente d'acceptation</h4> }
        <div class="card card-cascade narrower">
          <div className="card-image-top" class="view view-cascade overlay">
            <Image class="card-img-top" style={{width: "100%", height: "30vh", objectFit: "cover"}} cloudName="ddjeialc9" publicId={this.props.projectPhoto}  />
            <a href="!#">
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>

          <div style={{width: "100%", height: "40vh"}} class="card-body card-body-cascade">
            <h5>{this.props.projectTitle}</h5>

            <h4 class="font-weight-bold card-title">{this.props.projectLeaderSurname}</h4>

            <p style={{width: "100%", height: "40%", objectFit: "cover", overflow:"scroll"}} class="card-text">{this.props.projectShortDescription}</p>

            <Link to="/AdminProjectDescription"><button onMouseOver={ () => this.props.handleClick(this.props.projectId)} type="button" class="btn btn-light-green waves-effect ">En savoir plus</button></Link>
          </div>
        </div>
        <div>
          { this.state.displayButton ?
            <div className="buttonProject">
              <MDBBtn className="buttonProject" color="amber" onClick={()=>{ this.updateNoDisplayProject(); this.displayButton() }}>Retirer le projet de la plateforme</MDBBtn>
            </div>
          :
          <div className="buttonProject">
            <MDBBtn className="buttonProject" color="success"onClick={()=>{ this.updateDisplayProject(); this.displayButton() }}>Publier le projet</MDBBtn>
          </div>
          }
          <div className="buttonProject">
            <MDBBtn className="buttonProject" color="danger" onClick={this.toggle} >Supprimer le projet définitivement</MDBBtn>
            <MDBContainer>
              <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalBody>
                  <span style={{fontWeight:"bold"}}>Attention</span>, si vous confirmez la <span style={{fontWeight:"bold"}}>suppression du projet</span>, vous n'aurez plus jamais accès celui-ci.
                </MDBModalBody>
                <MDBModalFooter style={{display:"flex", justifyContent:"center"}}>
                  <MDBBtn color="danger" onClick={()=>{ this.removeProject() }}>Confirmer la suppression du projet</MDBBtn>
                </MDBModalFooter>
              </MDBModal>
            </MDBContainer>
          </div>
        </div>
      </div>




);
}
}

function mapDispatchToProps(dispatch) {
return { handleClick: function(id) {
  dispatch({type: 'enter', projectId: id});
           }
         }
       }

export default connect(
null,
mapDispatchToProps
)(AdminProjectCards);

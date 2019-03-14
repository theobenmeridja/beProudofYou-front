import React, { Component } from 'react';
import '../stylesheets/projectGallery.css';
import {connect} from 'react-redux';
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

class ProjectCards extends Component {


  render() {
    console.log("les propriétés:" , this.props)



    let projectSector;

    if (this.props.projectSector === "Agriculture"){
      projectSector = <h5 class="text-success pb-2 pt-1"><i class="fab fa-pagelines"></i>Agriculture</h5>
    } else if (this.props.projectSector === "Retail"){
      projectSector = <h5 class="pink-text pb-2 pt-1"><i class="fas fa-shopping-cart"></i>Retail</h5>
    } else if (this.props.projectSector === "Transports"){
      projectSector = <h5 class="text-info pb-2 pt-1"><i class="fas fa-bus-alt"></i>Transports</h5>
    } else if (this.props.projectSector === "Education"){
      projectSector = <h5 class="text-warning pb-2 pt-1"><i class="fas fa-graduation-cap"></i>Education</h5>
    } else if (this.props.projectSector === "Services"){
      projectSector = <h5 class="orange-text pb-2 pt-1"><i class="fas fa-street-view"></i>Services</h5>
    } else if (this.props.projectSector === "Technologie"){
      projectSector = <h5 class="text-secondary pb-2 pt-1"><i class="fas fa-cloud-upload-alt"></i>Technologie</h5>
    }



    return (

<div class="col-lg-4 col-md-12 mb-4">
  <div class="card card-cascade narrower">
    <div className="card-image-top" class="view view-cascade overlay">
      <img style={{width: "100%", height: "30vh", objectFit: "cover"}} class="card-img-top" src={require('../projectImages/projectImage'+this.props.projectNumber+'.jpg')}
      alt="Card image cap"/>
      <a>
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    <div style={{width: "100%", height: "40vh"}} class="card-body card-body-cascade">
      <h5>{this.props.projectSector}</h5>

      <h4 class="font-weight-bold card-title">{this.props.projectName}</h4>

      <p style={{width: "100%", height: "40%", objectFit: "cover", overflow:"scroll"}} class="card-text">{this.props.description}</p>

      <Link to="/ProjectDescription"><button onMouseOver={console.log('hoverOk'), () => this.props.handleClick(this.props.projectId)} type="button" class="btn btn-light-green waves-effect ">En savoir plus</button></Link>
      </div>
  </div>
</div>




);
}
}

function mapDispatchToProps(dispatch) {
return {
handleClick: function(id) {
  dispatch( {type: 'display', projectId: id} )
}
}
}


export default connect(
null,
mapDispatchToProps
)(ProjectCards);

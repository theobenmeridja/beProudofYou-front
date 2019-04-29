
import React, { Component } from 'react';
import '../stylesheets/projectGallery.css';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Image } from 'cloudinary-react';

class ProjectCards extends Component {


  render() {


    return (


<>
  { this.props.adminAgree ?
    <div style={{fontFamily: 'Roboto'}} class="col-lg-4 col-md-12 mb-4">
      <div class="card card-cascade narrower">
        <div className="card-image-top" class="view view-cascade overlay">
          <Image class="card-img-top" style={{width: "100%", height: "30vh", objectFit: "cover"}} cloudName="ddjeialc9" publicId={this.props.projectPhoto}  />
          <a href="#!">
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>

        <div style={{width: "100%", height: "40vh"}} class="card-body card-body-cascade">
          <h5>{this.props.projectTitle}</h5>

          <h4 class="font-weight-bold card-title">{this.props.projectLeaderSurname}</h4>

          <p style={{width: "100%", height: "40%", objectFit: "cover", overflow:"scroll"}} class="card-text">{this.props.projectShortDescription}</p>

          <Link to="/ProjectDescription"><button onMouseOver={ () => this.props.handleClick(this.props.projectId)} type="button" class="btn btn-light-green waves-effect ">En savoir plus</button></Link>
        </div>
      </div>
    </div>
  : null

  }
</>





);
}
}

function mapDispatchToProps(dispatch) {
return {
handleClick: function(id) {
  dispatch( {type: 'enter', projectId: id} )
}
}
}


export default connect(
null,
mapDispatchToProps
)(ProjectCards);

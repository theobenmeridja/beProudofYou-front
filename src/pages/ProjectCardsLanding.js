import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../stylesheets/landingPage.css';
import { Card } from "antd";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Image } from 'cloudinary-react';

class ProjectCardsLanding extends Component {


  render() {


    const { Meta } = Card;

    return (
      <div>
        { this.props.adminAgree ?
      <div className="cardsDiplay">
        <Link to="/ProjectDescription">
          <Card
            onMouseOver={ () => this.props.handleClick(this.props.projectId)}
            className="projetCard"
            hoverable
            style={{fontFamily:"Roboto ", textAlign:"center", width: "100%", height: "40vh", color:"#413c58", boxShadow: "1px 3px 20px #413c58" }}
            cover={<Image alt="example" style={{width: "100%", height: "25vh", objectFit: "cover"}} cloudName="ddjeialc9" publicId={this.props.projectPhoto} />}
          >
            <Meta
              title={this.props.projectLeaderSurname}
              description={this.props.projectTitle}
            />

          </Card>
        </Link>
      </div>
  : null  }
</div>

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
)(ProjectCardsLanding);

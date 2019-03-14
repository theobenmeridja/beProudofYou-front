import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../stylesheets/landingPage.css';
import {Icon, Button, Row, Col, Card } from "antd";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class ProjectCardsLanding extends Component {


  render() {
    console.log(this.props)

    const { Meta } = Card;

    return (

      <div className="cardsDiplay">
        <Link to="/ProjectDescription">
          <Card
            onMouseOver={console.log('hoverOk'), () => this.props.handleClick(this.props.projectId)}
            className="projetCard"
            hoverable
            style={{fontFamily:"Roboto ", textAlign:"center", width: "100%", height: "40vh", color:"#413c58", boxShadow: "1px 3px 20px #413c58" }}
            cover={<img alt="example" style={{width: "100%", height: "25vh", objectFit: "cover"}} src={require('../projectImages/projectImage'+this.props.projectNumber+'.jpg')} />}
          >
            <Meta
              title={this.props.projectName}
              description={this.props.projectSector}
            />

          </Card>
        </Link>
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
)(ProjectCardsLanding);

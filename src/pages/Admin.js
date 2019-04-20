
import React from 'react';
import { Form, FormGroup,Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../stylesheets/signin.css";
import { Redirect } from "react-router-dom";
import NavigationBar from './NavigationBar.js';
import Footer from '../components/footer.jsx';
import { MDBBtn} from "mdbreact";

/* captureEmailData captures data entered in email field */
/* capturePasswordData captures data entered in password field */
/* handleClickSignIn sends data to backend with fetch function and verifies if user exists in database and if yes program directs user to map */


class Signin extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    redirectProjectGallery: false,
    email: '',
    password: '',
  }
  this.captureEmailData = this.captureEmailData.bind(this);
  this.capturePasswordData = this.capturePasswordData.bind(this);
  this.handleClickSignIn = this.handleClickSignIn.bind(this);
}

captureEmailData(event){
  event.preventDefault();
  this.setState({
    email: event.target.value,
  });

}

capturePasswordData(event){
  event.preventDefault();
  this.setState({
    password: event.target.value,
  });

}


handleClickSignIn(event) {
  event.preventDefault();
    var ctx = this;
    fetch('https://beproudofyou-backend.herokuapp.com/signin', {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body: 'email='+ctx.state.email+'&password='+ctx.state.password
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(admin) {
      if(admin.email === ctx.state.email && admin.password === ctx.state.password){
        ctx.setState({
          redirectProjectGallery: true
        })
      }
    })
    .catch(function(error) {
        console.log('Request failed', error)
    });
  }


  render() {

    return (

<div >
  {
    this.state.redirectProjectGallery
      ?<Redirect to="/adminProjectGallery"/>
      :null
  }
  <div>
    <div>
      <NavigationBar/>
    </div>

    <div className="background">

      <div className="allContent">

        <Form  className="form">

          <h2 className="signInTitle">Identifiez-vous : </h2>

          <FormGroup>
            <Input type="email" name="email" onChange={this.captureEmailData} id="email" placeholder="Email" />
          </FormGroup>
          {' '}


          <FormGroup>
            <Input type="password" name="password" onChange={this.capturePasswordData} id="password" placeholder="Mot de passe" />
          </FormGroup>
          {' '}


          <FormGroup>
            <MDBBtn type="submit" onClick={this.handleClickSignIn} className="submit1" gradient="purple">S'identifier</MDBBtn>
          </FormGroup>

        </Form>
      </div>
    </div>
    <Footer/>
  </div>
  </div>
    );
  }
};


export default Signin

import React, { Component } from 'react';
import '../stylesheets/footer.css';
import { Link } from "react-router-dom";
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
       } from "mdbreact";

class MyFooter extends Component {

  render() {

    return (
      <div className="fourthFrame"  >

        <MDBFooter  color="unique-color-dark" className="font-small darken-3 pt-0">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="pt-5 py-4">
                <div className="mb-5 flex-center">
                  <a className="fb-ic">
                    <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                    </i>
                  </a>

                  <a className="gplus-ic">
                    <i className="fab fa-youtube fa-lg white-text mr-md-5 mr-3 fa-2x">
                    </i>
                  </a>
                  <a className="ins-ic">
                    <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                    </i>
                  </a>


                </div>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol md="12" className="pb-4">
                <div className="mb-5 text-center">
                  <a className="fb-ic">
                    <p className="fa-lg white-text mr-md-5 mr-3">Contact
                    </p>
                  </a>

                  <a className="gplus-ic">
                  <p className="fa-lg white-text mr-md-5 mr-3">Mentions Légales
                  </p>
                  </a>
                  <a className="ins-ic">
                  <p className="fa-lg white-text mr-md-5 mr-3">Conditions d'utilisation
                  </p>
                  </a>


                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div style={{fontFamily:"Roboto Slab"}}className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.MDBootstrap.com"> Be proud of You </a>
            </MDBContainer>
          </div>
        </MDBFooter>



      </div>
    );
  }
}

export default MyFooter;

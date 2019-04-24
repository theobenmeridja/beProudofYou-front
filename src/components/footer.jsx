import React, { Component } from 'react';
import '../stylesheets/footer.css';
import { Link } from "react-router-dom";
import { MDBContainer,
         MDBRow,
         MDBCol,
         MDBFooter } from "mdbreact";

class MyFooter extends Component {

  render() {

    return (
      <div className="fourthFrame"  >

        <MDBFooter  color="unique-color-dark" className="font-small darken-3 pt-0">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="pt-5 py-4">
                <div className="mb-5 flex-center">
                  <a className="fb-ic" href="https://www.facebook.com/beproudofyouTogo/" target="blank">
                    <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                    </i>
                  </a>

                  <a href="https://www.instagram.com/BeProudofYou.Togo/"  className="ins-ic">
                    <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                    </i>
                  </a>


                </div>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol md="12" className="pb-4">
                <div className="mb-5 text-center">
                  <Link to="/Contact"><a href="!#" className="fb-ic">
                    <p className="fa-lg white-text mr-md-5 mr-3">Contact
                    </p>
                  </a></Link>
                  <Link to="/CGU" ><a href="!#" className="gplus-ic">
                  <p className="fa-lg white-text mr-md-5 mr-3">CGU
                  </p>
                  </a></Link>
                  <Link to="/mentionslegales" ><a href="!#" className="gplus-ic">
                  <p className="fa-lg white-text mr-md-5 mr-3">Mentions Légales
                  </p>
                  </a></Link>
                  <Link to="/admin"><a href="!#" className="ins-ic">
                  <p className="fa-lg white-text mr-md-5 mr-3">Admin
                  </p>
                  </a></Link>


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

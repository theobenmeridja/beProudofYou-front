
import React from 'react';
import NavigationBar from './NavigationBar.js';
import Footer from '../components/footer.jsx';

/* captureEmailData captures data entered in email field */
/* capturePasswordData captures data entered in password field */
/* handleClickSignIn sends data to backend with fetch function and verifies if user exists in database and if yes program directs user to map */


class Cgu extends React.Component {

  render() {

    return (


  <div>
    <div>
      <NavigationBar/>
    </div>

    <div>
      <h3 style={{color:"#413c58", textAlign:"center"}} className="h1-responsive font-weight-bold my-5">
        Retrouver nos conditions générales d'utilisation destinées aux entrepreneurs
      </h3>
    </div>

    <div style={{display:"flex", justifyContent:"center", margin:"30px"}}>
      <iframe width="800" height="600" src="https://www.docdroid.net/pVXdEKQ/contractbeproudofyou.pdf" frameborder="0" allowtransparency allowfullscreen></iframe>
    </div>
    <Footer/>
  </div>

    );
  }
};


export default Cgu

import React, { Component } from 'react';
import '../stylesheets/rewards.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { notification} from 'antd';


class Rewards extends Component {

    constructor(props) {
      super(props);
      this.state = {
        amount: 1,
        modal: false,
        email:'',
        lastName:'',
        firstName:'',
        phone:'',
        address:'',
        city:'',
        postalCode:'',
        internSwitch: true,
        newContributors: 0,
        newCurrentAmount: 0,
      };
      this.handleAmountInput = this.handleAmountInput.bind(this)
      this.handleEmailInput = this.handleEmailInput.bind(this)
      this.handleFirstNameInput = this.handleFirstNameInput.bind(this)
      this.handleLastNameInput = this.handleLastNameInput.bind(this)
      this.handlePhoneInput = this.handlePhoneInput.bind(this)
      this.handleAddressInput = this.handleAddressInput.bind(this)
      this.handleCityInput = this.handleCityInput.bind(this)
      this.handlePostalCodeInput = this.handlePostalCodeInput.bind(this)
      this.updateContribution = this.updateContribution.bind(this)
    }

    handleAmountInput(e) {
        this.setState({amount: parseInt(e.target.value)});
      }

      handleEmailInput(e){
        this.setState({email: e.target.value})
      }

      handleFirstNameInput(e){
        this.setState({firstName: e.target.value})
      }

      handleLastNameInput(e){
        this.setState({lastName: e.target.value})
      }

      handlePhoneInput(e){
        this.setState({phone: e.target.value})
      }

      handleAddressInput(e){
        this.setState({address: e.target.value})
      }

      handleCityInput(e){
        this.setState({city: e.target.value})
      }

      handlePostalCodeInput(e){
        this.setState({postalCode: e.target.value})
      }

      toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

      updateContribution(){
        fetch('https://beproudofyou-backend.herokuapp.com/updateBudget', {
      method: 'PUT',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: 'contributors='+this.state.newContributors+'&currentAmount='+this.state.newCurrentAmount+'&_id='+this.props._id,
        });
      }


  render() {


    const onToken = token => {
      var body = {
        amount: this.state.amount*100,
        token: token,
        description: this.props.projectTitle,
        phone: this.state.phone,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        city: this.state.city,
        postalCode: this.state.postalCode
    };
    axios
        .post("http://localhost:3000/charge", body)
        .then(response => {
          console.log(response);
          notification.success({
          duration: 30,
          message: "Merci pour votre don !",
          description: "Votre don a bien été effectué. Vous recevrez, après la cloture de la campagne de financement de ce projet, votre contrepartie. Grâce à vous, ce porteur de projet pourra faire de son rêve une réalité ! Soyez fier de vous !",
        });

        this.setState({
          modal: false,
          newCurrentAmount: this.props.currentAmount + this.state.amount ,
          newContributors: this.props.contributors + 1,
          email:'',
          lastName:'',
          firstName:'',
          phone:'',
          address:'',
          city:'',
          postalCode:'',
        });

         {this.updateContribution()}

        })
        .catch(error => {
          console.log("Payment Error: ", error);
          notification.error({
          duration: 30,
          message: "Votre don n'a pas été effectué",
          description: "Un problème est survenu durant votre paiement. Veuillez vérifier que vos informations bancaires sont correctes avant de réessayer, merci. ",
        });
        });

    };




    return (

<div>
  {this.props.rewardsAmount && this.props.rewardsTitle && this.props.rewardsDescription ?

    <div className="rewardsCard">

      <div class="card card-cascade">


        <div class="rounded-top gradient-card-header purple-gradient px-1 py-3 bold">

          <div className="rewardsTitle">
            <h3 class="card-header-title">Pour plus de {Math.round(this.props.rewardsAmount/655.95)} €</h3>
            <h5 class="card-header-subtitle ">Soit {this.props.rewardsAmount} FCFA</h5>
          </div>

        </div>


        <div class="card-body card-body-cascade text-center">
          <h3 class="card-header-subtitle mb-3">{this.props.rewardsTitle}</h3>

          <p class="card-text">{this.props.rewardsDescription}</p>

        </div>

        <div id="rewardsFooter" class="card-footer">
          <MDBContainer>

            <div>
              <div>
                <input
                  className="amount"
                  type= "number"
                  placeholder="Votre montant en € "
                  onChange={this.handleAmountInput}
                />
              </div>

              <div>
                <MDBBtn class="btn btn-light-green waves-effect " onClick={this.toggle} >Faire un don</MDBBtn>
              </div>
            </div>


            <MDBModal id="modal" isOpen={this.state.modal} toggle={this.toggle}>
              <MDBModalHeader className="headerModalTitle" toggle={this.toggle}>Vos informations personnelles</MDBModalHeader>
              <MDBModalBody>
                <MDBRow>
                  <MDBCol size="5">
                    <MDBInput onChange={this.handleFirstNameInput} size="sm" icon="user" label="Prenom"  />
                  </MDBCol>
                  <MDBCol size="7">
                    <MDBInput onChange={this.handleLastNameInput} size="sm" label="Nom" />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol size="7">
                    <MDBInput onChange={this.handleEmailInput} size="sm" label="Email" icon="envelope-open" required />
                  </MDBCol>
                  <MDBCol size="5">
                    <MDBInput onChange={this.handlePhoneInput} size="sm" label="Téléphone" icon="phone" required />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol size="12">

                    <MDBInput onChange={this.handleAddressInput} icon="map-marker-alt" size="sm" label="Adresse (*utilisé pour l'envoi de votre contrepartie)" required />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol size="7">
                    <MDBInput onChange={this.handleCityInput} size="sm" label="Ville" icon="city" required />
                  </MDBCol>
                  <MDBCol size="5">
                    <MDBInput onChange={this.handlePostalCodeInput} size="sm" label="Code Postal" required />
                  </MDBCol>
                </MDBRow>
              </MDBModalBody>
              <MDBModalFooter style={{display:"flex",  alignItems:"center", justifyContent:"center"}} >

                { this.state.email && this.state.lastName && this.state.firstName && this.state.address && this.state.city && this.state.postalCode && this.state.phone ?

                  <StripeCheckout
                    className="aspButton fancy green"
                    label="Paiement" //Component button text
                    name="Be proud of You" //Modal Header
                    description={this.props.projectTitle}
                    email={this.state.email}
                    image= 'https://res.cloudinary.com/ddjeialc9/image/upload/c_scale,w_128/v1554895142/logo_bleu_Be_Proud_of_You.png'
                    panelLabel="Faire un don de" //Submit button in modal
                    amount={this.state.amount*100} //Amount in cents $9.99
                    currency="EUR"
                    token={onToken}
                    stripeKey="pk_test_e19w8aHEETO7Za1SrPDjXc3L">
                    <MDBBtn gradient="purple">
                      Paiement
                    </MDBBtn>
                  </StripeCheckout>

                :
                <div style={{display:"flex", flexDirection: "column", alignItems:"center", justifyContent:"center"}}>
                  <MDBBtn gradient="purple">
                    Paiement
                  </MDBBtn>

                  <div>
                    <p className="textBeforePayment">* Veuillez remplir toutes les informations demandées avant d'accéder au paiement</p>
                  </div>
                </div>
                }
              </MDBModalFooter>
            </MDBModal>



          </MDBContainer>
        </div>

      </div>

    </div>

  : null }

    </div>
    );
      }
    }


export default Rewards;

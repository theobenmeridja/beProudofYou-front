import React, { Component } from 'react';
import '../stylesheets/rewards.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';
import FedaPayButton from 'react-fedapay';


class Rewards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: 10,
      modal: false,
      email:'',
      lastName:'',
      firstName:'',
      phone:'',
      address:'',
      city:'',
      postalCode:'',
      internSwitch: true,
      euroAmount: 0,
    };
    this.handleAmountInput = this.handleAmountInput.bind(this)
    this.handleEmailInput = this.handleEmailInput.bind(this)
    this.handleFirstNameInput = this.handleFirstNameInput.bind(this)
    this.handleLastNameInput = this.handleLastNameInput.bind(this)
    this.handlePhoneInput = this.handlePhoneInput.bind(this)
    this.handleAddressInput = this.handleAddressInput.bind(this)
    this.handleCityInput = this.handleCityInput.bind(this)
    this.handlePostalCodeInput = this.handlePostalCodeInput.bind(this)
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleAmountInput(e) {
    this.setState({amount: e.target.value});
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


  render() {


    return (
      <div className="rewardsCard">

        <div class="card card-cascade">


          <div class="rounded-top gradient-card-header purple-gradient px-1 py-3 bold">

            <div className="rewardsTitle">
              <h3 class="card-header-title">Pour plus de {this.props.rewardsAmount} FCFA</h3>
              <h5 class="card-header-subtitle ">Soit {Math.round(this.props.rewardsAmount/655.95)} €</h5>
            </div>

          </div>


          <div class="card-body card-body-cascade text-center">
            <h3 class="card-header-subtitle mb-3">{this.props.rewardsTitle}</h3>

            <p class="card-text">{this.props.rewardsDesc}</p>

          </div>

          <div id="rewardsFooter" class="card-footer">
            <MDBContainer>

              <div>
                <div>
                  <input
                    className="amount"
                    type="number"
                    placeholder="Choisir le montant"
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
                    <MDBCol size="7">
                      <MDBInput onChange={this.handleLastNameInput} size="sm" label="Nom" icon="user" />
                    </MDBCol>
                    <MDBCol size="5">
                      <MDBInput onChange={this.handleFirstNameInput} size="sm" label="Prenom"  />
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
                      <MDBInput onChange={this.handleAddressInput} size="sm" label="Adresse" icon="map-marker-alt" required />
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
                  <MDBBtn gradient="purple" onClick={this.handlePay}>Suivant</MDBBtn>
                </MDBModalFooter>
              </MDBModal>

            </MDBContainer>
          </div>

        </div>

          </div>


          );
          }
          }


          class FedaPay extends Component {
            callback = (transactionId, transactionStatus) => {
              console.log(transactionId, transactionStatus);
            }

            render () {
              return (
                <FedaPayButton
                  callback="{this.callback}"
                  publicKey='pk_sandbox_xMYHN9GrxZigland1kOw9bi4'
                  buttonText='Suivant'
                  transactionAmount='1000'
                  transactionDescription='Weshhh'
                  currencyIso='XOF'
                  widgetDescription='Support @nioperas06'
                  widgetImage='https://sandbox-checkout.fedapay.com/img/marketplace.svg'
                widgetTitle='Support @nioperas06' />
    )
  }
}

export default Rewards;

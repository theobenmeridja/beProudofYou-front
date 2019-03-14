import React, { Component } from 'react';
import '../stylesheets/projectDescription.css';
import NavigationBar from './NavigationBar.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {connect} from 'react-redux';
import {Icon, Button, Row, Col, Card, Layout } from "antd";
import ProjectCards from './projectCards.js';
import MyFooter from '../components/footer.jsx';
import '../stylesheets/projectDescription.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';
import Media from "react-media";
import Rewards from './Rewards.js';
import { Progress } from 'antd';

class ProjectDescription extends Component {

  constructor(props) {
    super(props);
    this.state = {
      internSwitch: true,
      contributors: 0,
      currentAmount:212,
      moneyGoal: 300,
    };
    this.handleProjectSwitch = this.handleProjectSwitch.bind(this)
    this.handleContrepartieSwitch = this.handleContrepartieSwitch.bind(this)
  }

/*  A supprimer --> exemple pour passer des datas au modal


  handlePay() {
    window.getpaidSetup({
      amount: this.state.amount,
      txref: 'rave-123456',
      PBFPubKey: this.publicKey,
      custom_title: 'Be proud of You',
      payment_method: 'both',
      customer_firstname: this.state.firstName,
      customer_lastname: this.state.lastName,
      custom_description: "Pay Internet",
      customer_email: this.state.email,
      customer_phone: this.state.phone,
      currency:'EUR',
      meta: [
        {metaname:"Adresse", metavalue: this.state.address},
        {metaname:"Ville", metavalue: this.state.city},
        {metaname:"Code Postal", metavalue: this.state.postalCode},
    ],
      onclose: function() {},
      callback: function(response) {
        var txref = response.tx.txref; // collect flwRef returned and pass to a 					server page to complete status check.
        console.log("This is the response returned after a charge", response);
        if (
          response.tx.chargeResponseCode == "00" ||
          response.tx.chargeResponseCode == "0"
        ) {
          // redirect to a success page
        } else {
          // redirect to a failure page.
        }
      }
    });
  }


*/


  callback = (transactionId, transactionStatus) => {
      console.log(transactionId, transactionStatus);
    }

    handleProjectSwitch(){
      this.setState({
        internSwitch: true
      })
    }

    handleContrepartieSwitch(){
      this.setState({
        internSwitch: false
      })
    }


  render() {


    var projectData = [
      { id :"1",
        name:"Alex",
       sector: "Agriculture",
       description:"L'agriculture (du latin agricultura, composé à partir de ager, champ et colere, cultiver) est un processus par lequel les êtres humains aménagent leurs écosystèmes et contrôlent le cycle biologique d'espèces domestiquées, dans le but de produire des aliments et d'autres ressources utiles à leurs sociétés",
       rewards: [ {
            rewardsId:"1",
           rewardsAmount: "10000",
           rewardsTitle:"Vidéo de remerciements",
           rewardsDescription: "Une belle vidéo pour vous remercier de votre action",
         },

         {
           rewardsId:"2",
           rewardsAmount: "50000",
           rewardsTitle:"2 sac en plastique recyclable",
           rewardsDescription: "2 sac en plastique recyclable super perso"
         },

         {
           rewardsId:"3",
           rewardsAmount: "100000",
           rewardsTitle:"10 sac en plastique recyclable",
           rewardsDescription: "10 sac en plastique recyclable super perso"
         },

         {
           rewardsId:"4",
           rewardsAmount: "200000",
           rewardsTitle:"20 sac en plastique recyclable",
           rewardsDescription: "20 sac en plastique recyclable super perso"
         },
        ],
      },

      {id :"2",
        name:"Etienne",
       sector: "Retail",
       description: "Le commerce de détail est le maillon final de la chaîne de distribution. Il se distingue ainsi du commerce en gros.",
       rewards: [ {
            rewardsId:"1",
           rewardsAmount: "1440€",
           rewardsTitle:"yoooooooo",
           rewardsDescription: "une grosse boule putante",
         },

         {
           rewardsId:"2",
           rewardsAmount: "50490€",
           rewardsTitle:"tgggggggg",
           rewardsDescription: "merde alors de crotte"
         },

         {
           rewardsId:"3",
           rewardsAmount: "11111",
           rewardsTitle:"Casta ca castagne",
           rewardsDescription: "10 sac en plastique recyclable super perso"
         },

         {
           rewardsId:"4",
           rewardsAmount: "200€",
           rewardsTitle:"20 sac en plastique recyclable",
           rewardsDescription: "20 sac en plastique recyclable super perso"
         },
        ],
        },

      { id :"3",
        name:"Philippe",
       sector: "Transports",
       description:"Le transport est le déplacement d'objets, de marchandises, ou d'individus d'un endroit à un autre. Les modes de transport incluent l'aviation, le chemin de fer, le transport routier, le transport maritime, le transport par câble, l'acheminement par pipe-line et le transport spatial",
       rewards: [ {
            rewardsId:"1",
           rewardsAmount: "100000€",
           rewardsTitle:"whshhhhhhh",
           rewardsDescription: "Ca part direct en cacahuette",
         },

         {
           rewardsId:"2",
           rewardsAmount: "50000000€",
           rewardsTitle:"de la beue",
           rewardsDescription: "c'est ouf le canabissssss"
         },

         {
           rewardsId:"3",
           rewardsAmount: "100€",
           rewardsTitle:"10 sac en plastique recyclable",
           rewardsDescription: "10 sac en plastique recyclable super perso"
         },

         {
           rewardsId:"4",
           rewardsAmount: "200€",
           rewardsTitle:"20 sac en plastique recyclable",
           rewardsDescription: "20 sac en plastique recyclable super perso"
         },
        ],
        },


      {id :"4",
        name:"Wassima",
       sector: "Education",
       description:"L’éducation est étymologiquement :« guider hors de », c'est-à-dire développer, faire produire. Il signifie maintenant plus couramment l'apprentissage et le développement des facultés intellectuelles, morales et physiques, les moyens et les résultats de cette activité de développement"},

       { id:"5",
         name:"Etienne",
        sector: "Services",
        description: "Le commerce de détail est le maillon final de la chaîne de distribution. Il se distingue ainsi du commerce en gros."
         },

         { id:"6",
           name:"Moumousse",
          sector: "Technologie",
          description: "Le commerce de détail est le maillon final de la chaîne de distribution. Il se distingue ainsi du commerce en gros."
           },

    ];

    const {
  Header, Footer, Sider, Content,
} = Layout;

    console.log(this.props.projectId);
    let details = {};
    for (let i = 0; i < projectData.length; i++ ) {
      if (projectData[i].id == this.props.projectId ) {
        details = {description: projectData[i].description, sector: projectData[i].sector, name: projectData[i].name }
        var rewardsList = projectData[i].rewards.map(function(subarray, i) {
         return  <Rewards rewardsDesc={subarray.rewardsDescription} rewardsTitle={subarray.rewardsTitle} rewardsAmount={subarray.rewardsAmount}/>
       });
      }
    }



   console.log('liste', rewardsList)

    return (
    <div>
      <div>
        <NavigationBar/>
      </div>

      <Media query= {{ minWidth: 900 }}>
        {matches =>
          matches ? (
            <Layout className="wrap">
              <Header className="headerImg">
                <h1 className="projectTitle">La chasse aux grenouilles</h1>
                <h6 className="sector">{details.sector}</h6>
              </Header>
              <Layout >
                <Content className="content">
                  <div>
                    <div>
                      <h2 className="projectStoryTitle">Histoire du projet</h2>
                      <p className="projectStory"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>

                    <div>
                      <h2 className="projectGoalTitle">Notre but</h2>
                      <p className="projectGoal">{details.description}</p>
                    </div>
                  </div>

                  <div>
                    <div>
                      <h2 className="projectActionTitle">À quoi va servir le financement ?</h2>
                      <p className="projectAction">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>

                    <div>
                      <h2 className="budgetAllocationTitle">Répartition de l'investissement des dons</h2>
                      <p className="budgetAllocation">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                  </div>

                  <div>
                    <div>
                      <h2 className="projectLeaderNameTitle">Qui se cache derrière le projet ?</h2>
                      <h3 className="projectLeaderName">{details.name}</h3>
                      <img className="projectLeaderPhoto" src={require('../projectImages/photoProfessionnel.png')}/>
                      <p className="projectLeaderStory"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>

                    <div>
                      <h2 className="projectLeaderAmbitionTitle">Les ambitions futures</h2>
                      <p className="projectLeaderAmbition"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                  </div>



                </Content>
                <Sider className='siderBar' width='30%'>

                  <div className="contributorsCard">
                    <div className="contributorsFeatures">
                      <h6 id="numberContributors">{this.state.contributors} contributeurs </h6>

                      <h6 id="budgetGoal">{this.state.currentAmount} € sur {this.state.moneyGoal} €</h6>
                    </div>
                    <Progress className="moneyGoalPercent" type="circle" percent={Math.round(this.state.currentAmount/this.state.moneyGoal*100)}  />


                  </div>



                  <div>
                    {rewardsList}
                  </div>




                </Sider>
              </Layout>
              <MyFooter/>
            </Layout>
          )

          :

          /* Mobile Screen */

          (
            <Layout className="wrap">
              <Header className="headerImg">
                <h1 className="projectTitle">La chasse aux grenouilles</h1>
                <h6 className="sector">{details.sector}</h6>
              </Header>
              <Layout >
                <Content className="content">
                  { this.state.internSwitch
                    ?
                      <div>

                        <div className="buttonSwitch">
                          <MDBBtn className="purple-gradient" onClick= {this.handleProjecSwitch}>projet</MDBBtn>
                          <MDBBtn className="purple-gradient" onClick= {this.handleContrepartieSwitch} >contreparties</MDBBtn>
                        </div>

                        <div>
                          <div>
                            <div>
                              <h2 className="projectStoryTitle">Histoire du projet</h2>
                              <p className="projectStory"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>

                            <div>
                              <h2 className="projectGoalTitle">Notre but</h2>
                              <p className="projectGoal">{details.description}</p>
                            </div>
                          </div>

                          <div>
                            <div>
                              <h2 className="projectActionTitle">À quoi va servir le financement ?</h2>
                              <p className="projectAction">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>

                            <div>
                              <h2 className="budgetAllocationTitle">Répartition de l'investissement des dons</h2>
                              <p className="budgetAllocation">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                          </div>

                          <div>
                            <div>
                              <h2 className="projectLeaderNameTitle">Qui se cache derrière le projet ?</h2>
                              <h3 className="projectLeaderName">{details.name}</h3>
                              <img className="projectLeaderPhoto" src={require('../projectImages/photoProfessionnel.png')}/>
                              <p className="projectLeaderStory"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>

                            <div>
                              <h2 className="projectLeaderAmbitionTitle">Les ambitions futures</h2>
                              <p className="projectLeaderAmbition"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    :
                    <div>

                      <div className="buttonSwitch">
                        <MDBBtn className="purple-gradient" onClick= {this.handleProjectSwitch}>projet</MDBBtn>
                        <MDBBtn className="purple-gradient" onClick= {this.handleContrepartieSwitch}>contreparties</MDBBtn>
                      </div>

                      <div className="contributorsCard">
                        <div className="contributorsFeatures">
                          <h6 id="numberContributors">{this.state.contributors} contributeurs </h6>

                          <h6 id="budgetGoal">{this.state.currentAmount} € sur {this.state.moneyGoal} €</h6>
                        </div>
                        <Progress className="moneyGoalPercent" type="circle" percent={Math.round(this.state.currentAmount/this.state.moneyGoal*100)}  />
                      </div>

                      <div>
                        <p>{rewardsList}</p>
                      </div>
                    </div>
                  }
                </Content>

              </Layout>
              <MyFooter/>
            </Layout>
          )
        }
      </Media>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return { projectId: state.projectId }
}

export default connect(
    mapStateToProps,
    null
)(ProjectDescription);

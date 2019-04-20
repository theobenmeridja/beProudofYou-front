import React, { Component } from 'react';
import '../stylesheets/projectDescription.css';
import NavigationBar from './NavigationBar.js';
import {connect} from 'react-redux';
import { Layout } from "antd";
import MyFooter from '../components/footer.jsx';
import '../stylesheets/projectDescription.css';
import {MDBIcon, MDBBtn} from 'mdbreact';
import Media from "react-media";
import Rewards from './Rewards.js';
import { Progress } from 'antd';
import {Image} from 'cloudinary-react';


class ProjectDescription extends Component {

  constructor(props) {
    super(props);
    this.state = {
      internSwitch: true,
      projectData:[]
    };
    this.handleProjectSwitch = this.handleProjectSwitch.bind(this)
    this.handleContrepartieSwitch = this.handleContrepartieSwitch.bind(this)
  }

  componentDidMount(){

  var ctx = this;

  fetch('https://beproudofyou-backend.herokuapp.com/displayProjects')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    ctx.setState({projectData: data.projects});
  })
  .catch(function(error) {
    console.log('Request failed', error)
  });
  }


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


    const {
  Header,  Sider, Content,
} = Layout;

    var ctx = this;
    let details = {};
    for (let i = 0; i < ctx.state.projectData.length; i++ ) {
      if (ctx.state.projectData[i]._id === this.props.projectId ) {
        details = { _id: ctx.state.projectData[i]._id, leaderPhoto: ctx.state.projectData[i].projectLeaderName.replace(/\s/g, ""), projectTitle: ctx.state.projectData[i].projectTitle, sector: ctx.state.projectData[i].sector, projectLeaderName: ctx.state.projectData[i].projectLeaderName, projectLeaderSurname: ctx.state.projectData[i].projectLeaderSurname, projectPhoto: ctx.state.projectData[i].projectTitle.replace(/\s/g, ""), projectGoal: ctx.state.projectData[i].projectGoal, projectStory: ctx.state.projectData[i].projectStory, projectAction: ctx.state.projectData[i].projectAction, budgetAllocation: ctx.state.projectData[i].budgetAllocation, projectLeaderStory: ctx.state.projectData[i].projectLeaderStory, projectLeaderAmbition: ctx.state.projectData[i].projectLeaderAmbition, budgetGoal: Math.round(ctx.state.projectData[i].budgetGoal/655.95), contributors: ctx.state.projectData[i].contributors, currentAmount:ctx.state.projectData[i].currentAmount, facebookLink:ctx.state.projectData[i].facebookLink,
      instagramLink: ctx.state.projectData[i].instagramLink, websiteLink:ctx.state.projectData[i].websiteLink }


        var rewardsList = ctx.state.projectData[i].rewards.map(function(subarray, i) {
         return  <Rewards _id={details._id} currentAmount={details.currentAmount} contributors={details.contributors} projectTitle={details.projectTitle} rewardsDescription={subarray.rewardsDescription} rewardsTitle={subarray.rewardsTitle} rewardsAmount={subarray.rewardsAmount}/>
       });
      }
    }


    return (
    <div>
      <div>
        <NavigationBar/>
      </div>

      <Media query= {{ minWidth: 900 }}>
        {matches =>
          matches ? (
            <Layout className="wrap">
              <Header
                style={{backgroundImage: 'url(https://res.cloudinary.com/ddjeialc9/image/upload/'+details.projectPhoto+'.jpg)' }}  className="headerImg">
                <div>
                  <h1 className="projectTitle">{details.projectTitle}</h1>
                  <h6 className="sector">{details.sector}</h6>
                </div>
              </Header>
              <Layout >
                <Content className="content">
                  <div>
                    <div>
                      <h2 className="projectStoryTitle">Histoire du projet</h2>
                      <p className="projectStory">{details.projectStory}</p>
                    </div>

                    <div>
                      <h2 className="projectGoalTitle">Notre but</h2>
                      <p className="projectGoal">{details.projectGoal}</p>
                    </div>
                  </div>

                  <div>
                    <div>
                      <h2 className="projectActionTitle">À quoi va servir le financement ?</h2>
                      <p className="projectAction">{details.projectAction}</p>
                    </div>

                    <div>
                      <h2 className="budgetAllocationTitle">Répartition de l'investissement des dons</h2>
                      <p className="budgetAllocation">{details.budgetAllocation}</p>
                    </div>
                  </div>

                  <div>
                    <div>
                      <h2 className="projectLeaderNameTitle">Qui se cache derrière le projet ?</h2>

                      <h3 className="projectLeaderName">{details.projectLeaderSurname} {details.projectLeaderName}</h3>
                      <Image className="projectLeaderPhoto" cloudName="ddjeialc9" publicId={details.leaderPhoto}  />
                      <p className="projectLeaderStory">{details.projectLeaderStory}</p>
                    </div>

                    <div>
                      <h2 className="projectLeaderAmbitionTitle">Les ambitions futures</h2>
                      <p className="projectLeaderAmbition">{details.projectLeaderAmbition}</p>
                    </div>
                  </div>


                </Content>
                <Sider className='siderBar' width='30%'>

                  <div className="contributorsCard">
                    <div className="contributorsFeatures">
                      <h6 id="numberContributors">{details.contributors} contributeurs </h6>

                      <h6 id="budgetGoal">{details.currentAmount} € sur {details.budgetGoal} €</h6>
                    </div>
                    <Progress className="moneyGoalPercent" type="circle" percent={Math.round(details.currentAmount/details.budgetGoal*100)}  />
                  </div>

                  <div className="linkIcons">
                    <a href={details.facebookLink} target="_blank" rel="noopener noreferrer"><MDBIcon className="indigo-text" size="3x" fab icon="facebook-square" /></a>
                    <a href={details.instagramLink} target="_blank" rel="noopener noreferrer"><MDBIcon className="purple-text" size="3x" fab icon="instagram" /></a>
                    <a href={details.websiteLink} target="_blank" rel="noopener noreferrer"><MDBIcon className="blue-text" size="3x" icon="globe" /></a>
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
              <Header style={{backgroundImage: 'url(https://res.cloudinary.com/ddjeialc9/image/upload/'+details.projectPhoto+'.jpg)' }} className="headerImg">
                <h1 className="projectTitle">{details.projectTitle}</h1>
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
                              <p className="projectStory">{details.projectStory}</p>
                            </div>

                            <div>
                              <h2 className="projectGoalTitle">Notre but</h2>
                              <p className="projectGoal">{details.projectGoal}</p>
                            </div>
                          </div>

                          <div>
                            <div>
                              <h2 className="projectActionTitle">À quoi va servir le financement ?</h2>
                              <p className="projectAction">{details.projectAction}</p>
                            </div>

                            <div>
                              <h2 className="budgetAllocationTitle">Répartition de l'investissement des dons</h2>
                              <p className="budgetAllocation">{details.budgetAllocation}</p>
                            </div>
                          </div>

                          <div>
                            <div>
                              <h2 className="projectLeaderNameTitle">Qui se cache derrière le projet ?</h2>
                              <h3 className="projectLeaderName">{details.projectLeaderSurname} {details.projectLeaderName}</h3>
                              <Image className="projectLeaderPhoto" cloudName="ddjeialc9" publicId={details.leaderPhoto}  />
                              <p className="projectLeaderStory">{details.projectLeaderStory}</p>
                            </div>

                            <div>
                              <h2 className="projectLeaderAmbitionTitle">Les ambitions futures</h2>
                              <p className="projectLeaderAmbition">{details.projectLeaderAmbition}</p>
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
                          <h6 id="numberContributors">{details.contributors} contributeurs </h6>

                          <h6 id="budgetGoal">{details.currentAmount} € sur {details.budgetGoal} €</h6>
                        </div>
                        <Progress className="moneyGoalPercent" type="circle" percent={Math.round(this.state.currentAmount/details.budgetGoal*100)}  />
                      </div>

                      <div className="linkIcons">
                        <a href={details.facebookLink} target="_blank" rel="noopener noreferrer"><MDBIcon className="indigo-text" size="3x" fab icon="facebook-square" /></a>
                        <a href={details.instagramLink} target="_blank" rel="noopener noreferrer"><MDBIcon className="purple-text" size="3x" fab icon="instagram" /></a>
                        <a href={details.websiteLink} target="_blank" rel="noopener noreferrer"><MDBIcon className="blue-text" size="3x" icon="globe" /></a>
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

import React, { Component } from 'react';
import '../stylesheets/adminProjectDescription.css';
import NavigationBar from './NavigationBar.js';
import {connect} from 'react-redux';
import {Icon, Layout, Input } from "antd";
import MyFooter from '../components/footer.jsx';
import '../stylesheets/projectDescription.css';
import { MDBBtn } from 'mdbreact';
import Media from "react-media";
import AdminRewards from './AdminRewards.js';
import { Progress } from 'antd';
import {Image} from 'cloudinary-react';
import 'antd/dist/antd.css';

const { TextArea } = Input;

class AdminProjectDescription extends Component {

  constructor(props) {
    super(props);
    this.state = {
      internSwitch: true,
      projectData:[],
      newProjectStory: '',
      newProjectGoal : '',
      newProjectAction : '',
      newBudgetAllocation : '',
      newProjectLeaderStory : '',
      newProjectLeaderAmbition :'',
      projectLeaderName: '',
      projectLeaderSurname: '',
      projectTitle:'',
      projectPhoto:'',
      leaderPhoto:'',
      sector:'',
      budgetGoal:'',
      contributors:'',
      currentAmount:'',
      projectStory: '',
      projectGoal :'',
      projectAction :'' ,
      budgetAllocation :'' ,
      projectLeaderStory : '',
      projectLeaderAmbition : '',
      isInEditModeProjectStory :false,
      isInEditModeProjectGoal :false,
      isInEditModeProjectAction :false,
      isInEditModeBudgetAllocation :false,
      isInEditModeProjectLeaderStory :false,
      isInEditModeProjectLeaderAmbition :false,
      rewards: [],
      projectLeaderEmail: '',
      projectLeaderPhone: '',
      projectLeaderAddress: '',
      projectLeaderPostalCode: '',
      projectLeaderCity: '',
    };
    this.handleProjectSwitch = this.handleProjectSwitch.bind(this)
    this.handleContrepartieSwitch = this.handleContrepartieSwitch.bind(this)
    this.changeCancelModeProjectStory  = this.changeCancelModeProjectStory.bind(this)
    this.changeCancelModeProjectGoal = this.changeCancelModeProjectGoal.bind(this)
    this.changeCancelModeProjectAction = this.changeCancelModeProjectAction.bind(this)
    this.changeCancelModeBudgetAllocation = this.changeCancelModeBudgetAllocation.bind(this)
    this.changeCancelModeProjectLeaderStory = this.changeCancelModeProjectLeaderStory.bind(this)
    this.changeCancelModeProjectLeaderAmbition = this.changeCancelModeProjectLeaderAmbition.bind(this)
    this.handleChangeProjectStory = this.handleChangeProjectStory.bind(this)
    this.handleChangeProjectGoal = this.handleChangeProjectGoal.bind(this)
    this.handleChangeProjectAction = this.handleChangeProjectAction.bind(this)
    this.handleChangeBudgetAllocation = this.handleChangeBudgetAllocation.bind(this)
    this.handleChangeProjectLeaderStory = this.handleChangeProjectLeaderStory.bind(this)
    this.handleChangeProjectLeaderAmbition = this.handleChangeProjectLeaderAmbition.bind(this)
    this.changeEditModeProjectStory = this.changeEditModeProjectStory.bind(this)
    this.changeEditModeProjectGoal = this.changeEditModeProjectGoal.bind(this)
    this.changeEditModeProjectAction = this.changeEditModeProjectAction.bind(this)
    this.changeEditModeBudgetAllocation = this.changeEditModeBudgetAllocation.bind(this)
    this.changeEditModeProjectLeaderStory = this.changeEditModeProjectLeaderStory.bind(this)
    this.changeEditModeProjectLeaderAmbition = this.changeEditModeProjectLeaderAmbition.bind(this)
  }


//--------- Find project Data --------//

  componentDidMount(){

    var ctx = this;
    fetch('https://beproudofyou-backend.herokuapp.com/findProjectDetails', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: '_id='+this.props.projectId
      })
      .then(function(response) {
          return response.json();
      })
      .then(function(project) {
          ctx.setState({
            projectData: project,
            rewards: project.rewards,
            newProjectStory: project.projectStory,
            newProjectGoal : project.projectGoal,
            newProjectAction : project.projectAction,
            newBudgetAllocation : project.budgetAllocation,
            newProjectLeaderStory : project.projectLeaderStory,
            newProjectLeaderAmbition : project.projectLeaderAmbition,
            projectStory: project.projectStory,
            projectGoal : project.projectGoal,
            projectAction : project.projectAction,
            budgetAllocation : project.budgetAllocation,
            projectLeaderStory : project.projectLeaderStory,
            projectLeaderAmbition : project.projectLeaderAmbition,
            projectLeaderName: project.projectLeaderName,
            projectLeaderSurname: project.projectLeaderSurname,
            projectTitle: project.projectTitle,
            projectPhoto: project.projectTitle.replace(/\s/g, ""),
            leaderPhoto: project.projectLeaderName.replace(/\s/g, ""),
            sector: project.sector,
            budgetGoal: project.budgetGoal,
            contributors: project.contributors,
            currentAmount: project.currentAmount,
            projectLeaderEmail: project.projectLeaderEmail,
            projectLeaderPhone: project.projectLeaderPhone,
            projectLeaderAddress: project.projectLeaderAddress,
            projectLeaderPostalCode: project.projectLeaderPostalCode,
            projectLeaderCity: project.projectLeaderCity
          })
      })
      .catch(function(error) {
          console.log('Request failed', error)
      });
    }



  callback = (transactionId, transactionStatus) => {
      console.log(transactionId, transactionStatus);
    }

    //------- Mobile Screen ----------//

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

    //------- Edit Mode or not----------//

    changeEditModeProjectStory = () => {
      this.setState({
        isInEditModeProjectStory : !this.state.isInEditModeProjectStory
      })
    }

    changeEditModeProjectGoal = () => {
      this.setState({
        isInEditModeProjectGoal : !this.state.isInEditModeProjectGoal
      })
    }

    changeEditModeProjectAction = () => {
      this.setState({
        isInEditModeProjectAction : !this.state.isInEditModeProjectAction
      })
    }

    changeEditModeBudgetAllocation = () => {
      this.setState({
        isInEditModeBudgetAllocation : !this.state.isInEditModeBudgetAllocation
      })
    }

    changeEditModeProjectLeaderStory = () => {
      this.setState({
        isInEditModeProjectLeaderStory : !this.state.isInEditModeProjectLeaderStory
      })
    }

    changeEditModeProjectLeaderAmbition = () => {
      this.setState({
        isInEditModeProjectLeaderAmbition : !this.state.isInEditModeProjectLeaderAmbition
      })
    }

    //------- Cancel Mode ----------//

    changeCancelModeProjectStory  = () => {
      this.setState({
        isInEditModeProjectStory : !this.state.isInEditModeProjectStory,
        newProjectStory: this.state.projectStory,
      })
    }

    changeCancelModeProjectGoal = () => {
      this.setState({
        isInEditModeProjectGoal : !this.state.isInEditModeProjectGoal,
        newProjectGoal : this.state.projectGoal,
      })
    }

    changeCancelModeProjectLeaderAmbition   = () => {
      this.setState({
        isInEditModeProjectLeaderAmbition : !this.state.isInEditModeProjectLeaderAmbition,
        newProjectLeaderAmbition : this.state.projectLeaderAmbition
      })
    }

    changeCancelModeProjectAction  = () => {
      this.setState({
        isInEditModeProjectAction : !this.state.isInEditModeProjectAction,
        newProjectAction: this.state.projectAction,
      })
    }

    changeCancelModeBudgetAllocation  = () => {
      this.setState({
        isInEditModeBudgetAllocation : !this.state.isInEditModeBudgetAllocation,
        newBudgetAllocation : this.state.budgetAllocation,
      })
    }


    changeCancelModeProjectLeaderStory   = () => {
      this.setState({
        isInEditModeProjectLeaderStory : !this.state.isInEditModeProjectLeaderStory,
        newProjectLeaderStory : this.state.projectLeaderStory,
      })
    }

    //------- ProjectStory Update ----------//

    renderEditViewProjectStory = () => {
      return <div>
        <TextArea
          type="text"
          defaultValue = {this.state.newProjectStory}
          autosize={{ minRows: 4, maxRows: 10 }}
          onChange ={this.handleChangeProjectStory}
        />
        <MDBBtn color="danger" style={{marginBottom: '25px'}} onClick= {this.changeCancelModeProjectStory}>Annuler les modifications</MDBBtn>
        <MDBBtn color="success" style={{marginBottom: '25px'}} onClick= {this.updateComponentValue}>Sauvegarder</MDBBtn>
        </div>

    }

    renderDefaultViewProjectStory = () => {
      return <div>
        <p className="projectStory">{this.state.newProjectStory}</p>
        <MDBBtn color="amber" style={{marginBottom: '25px'}} onClick= {this.changeEditModeProjectStory}>Modifier</MDBBtn>
      </div>
    }

    handleChangeProjectStory(e){
      this.setState({
        newProjectStory: e.target.value
         })
       }

       //------- ProjectGoal Update ----------//

       renderEditViewProjectGoal = () => {
         return <div>
           <TextArea
             type="text"
             defaultValue = {this.state.newProjectGoal}
             autosize={{ minRows: 4, maxRows: 10 }}
             onChange ={this.handleChangeProjectGoal}
           />
           <MDBBtn color="danger" style={{marginBottom: '25px'}} onClick= {this.changeCancelModeProjectGoal}>Annuler les modifications</MDBBtn>
           <MDBBtn color="success" style={{marginBottom: '25px'}} onClick= {this.updateComponentValue}>Sauvegarder</MDBBtn>
           </div>

       }

       renderDefaultViewProjectGoal = () => {
         return <div>
           <p className="projectStory">{this.state.newProjectGoal}</p>
           <MDBBtn color="amber" style={{marginBottom: '25px'}} onClick= {this.changeEditModeProjectGoal}>Modifier</MDBBtn>
         </div>
       }

       handleChangeProjectGoal(e){
         this.setState({
           newProjectGoal: e.target.value
            })
          }

          //------- BudgetAllocation Update ----------//

          renderEditViewBudgetAllocation = () => {
            return <div>
              <TextArea
                type="text"
                defaultValue = {this.state.newBudgetAllocation}
                autosize={{ minRows: 4, maxRows: 10 }}
                onChange ={this.handleChangeBudgetAllocation}
              />
              <MDBBtn color="danger" style={{marginBottom: '25px'}} onClick= {this.changeCancelModeBudgetAllocation}>Annuler les modifications</MDBBtn>
              <MDBBtn color="success" style={{marginBottom: '25px'}} onClick= {this.updateComponentValue}>Sauvegarder</MDBBtn>
              </div>

          }

          renderDefaultViewBudgetAllocation = () => {
            return <div>
              <p className="projectStory">{this.state.newBudgetAllocation }</p>
              <MDBBtn color="amber" style={{marginBottom: '25px'}} className="editButton" onClick= {this.changeEditModeBudgetAllocation}>Modifier</MDBBtn>
            </div>
          }

          handleChangeBudgetAllocation(e){
            this.setState({
              newBudgetAllocation: e.target.value
               })
             }

             //------- ProjectAction Update ----------//

             renderEditViewProjectAction  = () => {
               return <div>
                 <TextArea
                   type="text"
                   defaultValue = {this.state.newProjectAction }
                   autosize={{ minRows: 4, maxRows: 10 }}
                   onChange ={this.handleChangeProjectAction }
                 />
                 <MDBBtn color="danger" style={{marginBottom: '25px'}} onClick= {this.changeCancelModeProjectAction}>Annuler les modifications</MDBBtn>
                 <MDBBtn color="success" style={{marginBottom: '25px'}} onClick= {this.updateComponentValue}>Sauvegarder</MDBBtn>
                 </div>

             }

             renderDefaultViewProjectAction  = () => {
               return <div>
                 <p className="projectStory">{this.state.newProjectAction}</p>
                 <MDBBtn color="amber" style={{marginBottom: '25px'}} className="editButton" onClick= {this.changeEditModeProjectAction}>Modifier</MDBBtn>
               </div>
             }

             handleChangeProjectAction (e){
               this.setState({
                 newProjectAction : e.target.value
                  })
                }

                //------- ProjectLeaderAmbition Update ----------//

                renderEditViewProjectLeaderAmbition  = () => {
                  return <div>
                    <TextArea
                      type="text"
                      defaultValue = {this.state.newProjectLeaderAmbition}
                      autosize={{ minRows: 4, maxRows: 10 }}
                      onChange ={this.handleChangeProjectLeaderAmbition }
                    />
                    <MDBBtn color="danger" style={{marginBottom: '25px'}} onClick= {this.changeCancelModeProjectLeaderAmbition}>Annuler les modifications</MDBBtn>
                    <MDBBtn color="success" style={{marginBottom: '25px'}} onClick= {this.updateComponentValue}>Sauvegarder</MDBBtn>
                    </div>

                }

                renderDefaultViewProjectLeaderAmbition  = () => {
                  return <div>
                    <p className="projectStory">{this.state.newProjectLeaderAmbition}</p>
                    <MDBBtn color="amber" style={{marginBottom: '25px'}} onClick= {this.changeEditModeProjectLeaderAmbition}>Modifier</MDBBtn>
                  </div>
                }

                handleChangeProjectLeaderAmbition (e){
                  this.setState({
                    newProjectLeaderAmbition : e.target.value
                     })
                   }


                   //------- ProjectLeaderStory Update ----------//

                   renderEditViewProjectLeaderStory = () => {
                     return <div>
                       <TextArea
                         type="text"
                         defaultValue = {this.state.newProjectLeaderStory }
                         autosize={{ minRows: 4, maxRows: 10 }}
                         onChange ={this.handleChangeProjectLeaderStory  }
                       />
                       <MDBBtn color="danger" style={{marginBottom: '25px'}} onClick= {this.changeCancelModeProjectLeaderStory}>Annuler les modifications</MDBBtn>
                       <MDBBtn color="success" style={{marginBottom: '25px'}} onClick= {this.updateComponentValue}>Sauvegarder</MDBBtn>
                       </div>

                   }

                   renderDefaultViewProjectLeaderStory   = () => {
                     return <div>
                       <p className="projectStory">{this.state.newProjectLeaderStory}</p>
                       <MDBBtn color="amber" style={{marginBottom: '25px'}} className="editButton" onClick= {this.changeEditModeProjectLeaderStory}>Modifier</MDBBtn>
                     </div>
                   }

                   handleChangeProjectLeaderStory  (e){
                     this.setState({
                       newProjectLeaderStory  : e.target.value
                        })
                      }

//------- Save modifications ----------//

    updateComponentValue = (e) =>{
      this.setState({
        isInEditMode : false,
      });
      {this.updateProject()}
    }

       updateProject(){
         fetch('https://beproudofyou-backend.herokuapp.com/updateProject', {
       method: 'PUT',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
       body: '_id='+this.props.projectId+'&projectStory='+this.state.newProjectStory+'&projectGoal='+this.state.newProjectGoal+'&projectLeaderAmbition='+this.state.newProjectLeaderAmbition+'&projectLeaderStory='+this.state.newProjectLeaderStory+'&budgetAllocation='+this.state.newBudgetAllocation+'&projectAction='+this.state.newProjectAction
         });
         this.setState({
           isInEditModeBudgetAllocation : false,
           isInEditModeProjectStory : false,
           isInEditModeProjectGoal: false,
           isInEditModeProjectAction: false,
           isInEditModeProjectLeaderAmbition : false,
           isInEditModeProjectLeaderStory : false,
         })
       }


  render() {

        var adminRewardsList = this.state.rewards.map(function(subarray, i) {
         return  <AdminRewards rewardsDescription={subarray.rewardsDescription} rewardsTitle={subarray.rewardsTitle} rewardsAmount={subarray.rewardsAmount}/>
})


    const {
  Header,Sider, Content,
} = Layout;





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
                style={{backgroundImage: 'url(https://res.cloudinary.com/ddjeialc9/image/upload/'+this.state.projectPhoto+'.jpg)' }}  className="headerImg">
                <div>
                  <h1 className="projectTitle">{this.state.projectTitle}</h1>
                  <h6 className="sector">{this.state.sector}</h6>
                </div>
              </Header>
              <Layout >
                <Content className="content">
                  <div>
                    <div>
                      <h2 className="projectStoryTitle">Histoire du projet</h2>
                      {
                        this.state.isInEditModeProjectStory ?
                          this.renderEditViewProjectStory()
                        :
                        this.renderDefaultViewProjectStory()
                      }
                    </div>

                    <div>
                      <h2 className="projectGoalTitle">Notre but</h2>
                      {
                        this.state.isInEditModeProjectGoal ?
                          this.renderEditViewProjectGoal()
                        :
                        this.renderDefaultViewProjectGoal()
                      }
                    </div>
                  </div>

                  <div>
                    <div>
                      <h2 className="projectActionTitle">À quoi va servir le financement ?</h2>
                      {
                        this.state.isInEditModeProjectAction ?
                          this.renderEditViewProjectAction()
                        :
                        this.renderDefaultViewProjectAction()
                      }
                    </div>

                    <div>
                      <h2 className="budgetAllocationTitle">Répartition de l'investissement des dons</h2>
                      {
                        this.state.isInEditModeBudgetAllocation ?
                          this.renderEditViewBudgetAllocation()
                        :
                        this.renderDefaultViewBudgetAllocation()
                      }
                    </div>
                  </div>

                  <div>
                    <div>
                      <h2 className="projectLeaderNameTitle">Qui se cache derrière le projet ?</h2>

                      <h3 className="projectLeaderName">{this.state.projectLeaderSurname} {this.state.projectLeaderName}</h3>
                      <Image className="projectLeaderPhoto" cloudName="ddjeialc9" publicId={this.state.projectLeaderName}  />
                      {
                        this.state.isInEditModeProjectLeaderStory ?
                          this.renderEditViewProjectLeaderStory()
                        :
                        this.renderDefaultViewProjectLeaderStory()
                      }
                    </div>

                    <div>
                      <h2 className="projectLeaderAmbitionTitle">Les ambitions futures</h2>
                      {
                        this.state.isInEditModeProjectLeaderAmbition ?
                          this.renderEditViewProjectLeaderAmbition()
                        :
                        this.renderDefaultViewProjectLeaderAmbition()
                      }
                    </div>
                  </div>


                </Content>
                <Sider className='siderBar' width='30%'>

                  <div className="contributorsCard">
                    <div className="contributorsFeatures">
                      <h6 id="numberContributors">{this.state.contributors} contributeurs </h6>

                      <h6 id="budgetGoal">{this.state.currentAmount} € sur {this.state.budgetGoal} €</h6>
                    </div>
                    <Progress className="moneyGoalPercent" type="circle" percent={Math.round(this.state.currentAmount/this.state.budgetGoal*100)}  />
                  </div>

                  <div className="allInfos">
                    <h4 style={{marginBottom:'15px'}}>Coordonées de l'entrepreneur</h4>
                    <div className="projectInfos">
                      <Icon type="mail" />
                      <h6 className="textInfos">{this.state.projectLeaderEmail}</h6>
                    </div>
                    <div className="projectInfos" >
                      <Icon type="phone" />
                      <h6 className="textInfos">{this.state.projectLeaderPhone}</h6>
                    </div>
                    <div className="projectInfos" >
                      <Icon type="home" />
                      <h6 className="textInfos">{this.state.projectLeaderAddress}</h6>
                      <h6 className="textInfos">{this.state.projectLeaderPostalCode}</h6>
                      <h6 className="textInfos">{this.state.projectLeaderCity}</h6>
                    </div>
                  </div>

                  <div>
                    {adminRewardsList}
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
              <Header style={{backgroundImage: 'url(https://res.cloudinary.com/ddjeialc9/image/upload/'+this.state.projectPhoto+'.jpg)' }} className="headerImg">
                <h1 className="projectTitle">{this.state.projectTitle}</h1>
                <h6 className="sector">{this.state.sector}</h6>
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
                              {
                                this.state.isInEditModeProjectStory ?
                                this.renderEditViewProjectStory()
                                   :
                                this.renderDefaultViewProjectStory()
                              }
                            </div>

                            <div>
                              <h2 className="projectGoalTitle">Notre but</h2>
                              {
                                this.state.isInEditModeProjectGoal ?
                                this.renderEditViewProjectGoal()
                                   :
                                this.renderDefaultViewProjectGoal()
                              }
                            </div>
                          </div>

                          <div>
                            <div>
                              <h2 className="projectActionTitle">À quoi va servir le financement ?</h2>
                              {
                                this.state.isInEditModeProjectAction ?
                                this.renderEditViewProjectAction()
                                   :
                                this.renderDefaultViewProjectAction()
                              }
                            </div>

                            <div>
                              <h2 className="budgetAllocationTitle">Répartition de l'investissement des dons</h2>
                              {
                                this.state.isInEditModeBudgetAllocation ?
                                this.renderEditViewBudgetAllocation()
                                   :
                                this.renderDefaultViewBudgetAllocation()
                              }
                            </div>
                          </div>

                          <div>
                            <div>
                              <h2 className="projectLeaderNameTitle">Qui se cache derrière le projet ?</h2>
                              <h3 className="projectLeaderName">{this.state.projectLeaderSurname} {this.state.projectLeaderName}</h3>
                              <Image className="projectLeaderPhoto" cloudName="ddjeialc9" publicId={this.state.leaderPhoto}  />
                              {
                                this.state.isInEditModeProjectLeaderStory ?
                                this.renderEditViewProjectLeaderStory()
                                   :
                                this.renderDefaultViewProjectLeaderStory()
                              }
                            </div>

                            <div>
                              <h2 className="projectLeaderAmbitionTitle">Les ambitions futures</h2>
                              {
                                this.state.isInEditModeProjectLeaderAmbition?
                                this.renderEditViewProjectLeaderAmbition()
                                   :
                                this.renderDefaultViewProjectLeaderAmbition()
                              }
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

                          <h6 id="budgetGoal">{this.state.currentAmount} € sur {this.state.budgetGoal} €</h6>
                        </div>
                        <Progress className="moneyGoalPercent" type="circle" percent={Math.round(this.state.currentAmount/this.state.budgetGoal*100)}  />
                      </div>

                      <div>
                        <p>{adminRewardsList}</p>
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
)(AdminProjectDescription);

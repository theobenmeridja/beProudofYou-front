import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js';
import Footer from '../components/footer.jsx';
import AdminProjectCards from './AdminProjectCards.js';

class AdminProjectGallery extends Component {
  constructor () {
    super()
    this.state = {
      projectData:[],
      displayProjects:'',
    }

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

  handler() {
    this.setState({
      displayProjects: true
    })
  }

  render() {

      var ctx = this;
     var projectList = ctx.state.projectData.map(function(project, i) {
      return <AdminProjectCards projectLeaderStory={project.projectLeaderStory}  budgetAllocation={project.budgetAllocation} budgetGoal={project.budgetGoal} projectAction={project.projectAction} projectLeaderAmbition={project.projectLeaderAmbition}   adminAgree={project.adminAgree} projectStory={project.projectStory} projectId={project._id} projectLeaderSurname={project.projectLeaderSurname} projectTitle={project.projectTitle} projectShortDescription={project.projectShortDescription} projectPhoto={project.projectTitle.replace(/\s|[()#!?'"$%&*+-.:;<>@_{}€]/g, "")}/>;
    });



    return (
    <div style={{fontFamily: 'Roboto'}}>
      <NavigationBar style={{marginBottom: "110px"}} />

      <section className="text-center my-5">
        <h2 style={{color:"#413c58"}} className="h1-responsive font-weight-bold my-5">
          Liste de tous les projets proposés
        </h2>
      </section>

        <section id="articles" class="text-center py-5">
          <div class="container">
            <div class="row">
              {projectList}
            </div>
          </div>
        </section>

      <div>
        <Footer/>
      </div>
    </div>

          );
        }
      }

export default AdminProjectGallery;

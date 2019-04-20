import React, { Component } from 'react';
import '../stylesheets/adminRewards.css';


class AdminRewards extends Component {

  render() {

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


      </div>

    </div>

  : null }

    </div>
    );
      }
    }


export default AdminRewards;

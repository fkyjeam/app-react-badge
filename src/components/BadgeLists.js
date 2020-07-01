import React from "react";

import "./styles/BadgesList.css";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';


class BadgesListItem extends React.Component {
  render() {
    return (
      
      <div className="card BadgesListItem container">
      
        <div className="row">
          <div className="col-2 col-sm-2">
            <img
              className="BadgesListItem__avatar"
              src={this.props.badge.avatarUrl }
              alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
            />
        
          </div>

          <div className="col-10 col-sm-10">
              <div className="col">  
                <h5 className="card-title">
                {this.props.badge.firstName } {this.props.badge.lastName }
              </h5>
              </div>
              <div className="col">  
                <i className="fa fa-twitter"></i>
                <a href="">@{this.props.badge.twitter}</a> 
              </div>              
              <div className="col">{this.props.badge.jobTitle}</div>
          
            
          </div>
        </div>
      </div>
      
    );
  }
}

class BadgeLists extends React.Component {
  render () {
    if( this.props.badges.length === 0 ) {
      return (
        <div>
          <h3>No encontramos ningún Badge</h3>
          <Link className="btn btn-primary" to="/badges/new">Create new badge</Link>
        </div>
      )
    }

    return (
      <div className="Badges__container">
        <div className="BadgesList">
          <ul className="list-unstyled">
            {this.props.badges.map((badge) => {
              return (
                <li key={badge.id}>
                  <BadgesListItem badge={badge} />
                </li>
              );
            }) }
          </ul>
        </div>
      </div>
    );
  }
}

export default BadgeLists;
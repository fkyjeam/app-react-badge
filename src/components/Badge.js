import React  from "react";
import './styles/Badge.css';
import conflogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={conflogo} alt="Logo" />
        </div>

        <div className="Badge__section-name ">
          
          <Gravatar email = {this.props.email || 'EMAIL'} />

          <h1>
            {this.props.firstName || 'FIRST NAME'} <br />
            {this.props.lastName || 'LAST NAME'}
          </h1>
        </div>

        <div className="Badge__section-info ">
          <h3>{this.props.job || 'JOB'}</h3>
          <p>@{this.props.twitter || 'TWITTER'}</p>
        </div>

        <div className="Badge__footer">Form Post </div>
      </div>
    );
  }
}

export default Badge;
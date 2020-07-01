import React from "react";
import {Link} from "react-router-dom";

import BadgeLists from "../components/BadgeLists";
// BadgeLists
import "./styles/Badges.css";

import conflogo from "../images/badge-header.svg";

import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import SkeletonBadgeLists from '../components/SkeletonBadgeLists';


class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount () {
    this.fechData()
  }

  fechData = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = await api.badges.list();

      this.setState({loading:false, data:data})
    } catch (error) {
      this.setState({loading:false, error: error})
    }
  }

  

  render() {
    if (this.state.loading === true) {
      // return <PageLoading />
      const skeleton =  <SkeletonBadgeLists />
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={conflogo} alt="" className="Badges_conf-logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          
          { this.state.data !== undefined && (
            <BadgeLists badges={this.state.data} />
          ) || <SkeletonBadgeLists /> }
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;

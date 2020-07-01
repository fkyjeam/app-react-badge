import React from "react";

import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm.js";
import api from '../api';
import header from "../images/astronaut2.svg";
import './styles/BadgeNew.css';

class BadgeNew extends React.Component {
    state = {
        form : {},
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: 'DESIGN_WEB',
        twitter: ''
    };

    handleChange = e => {

        this.setState({
          form: {
            ... this.state.form,  
            [e.target.name]: e.target.value ,
            },
        });
    };

    handleSubmit = async e => {
      e.preventDefault();
      this.setState({loading:true, error: null})
  
      try {
        await api.badges.create(this.state.form)
        this.setState({loading:false})
      } catch (error) {
        console.log(error);
        this.setState({loading:false, error: error})
      }
    }

    render() {
        return (
          <React.Fragment>
            
            <div id="slider" className="BadgeNew__hero">
              <img className="animar_astro" src={header} alt="" />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge
                        firstName={this.state.form.firstName}
                        lastName={this.state.form.lastName}
                        twitter={this.state.form.twitter}
                        job={this.state.form.jobTitle}
                        email={this.state.form.email}
                        avatar="https://pbs.twimg.com/profile_images/1212267729236955136/A2wKmE9d_400x400.jpg"
                        />
                    </div>
                    <div className="col-6">
                      <BadgeForm 
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        formValues={this.state.form}/>
                    </div>
                </div>
            </div>
          </React.Fragment>
        );
    }
} 


export default BadgeNew;
import React from "react";

class BadgeForm extends React.Component {
   state = {
   };

//   handleChange = e => {
  
//     console.log({ name: e.target.name, value: e.target.value });

//     this.setState({
//         [e.target.name]: e.target.value,
//     });
//   };

  handleClick = (e) => {
    console.log("Was clic pressed");
  };

  // se reemplaza por el props que es invocado
  /*handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Was Submitted");
    console.log(this.state);
  };*/

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="firstName"
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="lastName"
              value={this.state.lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="email"
              type="email"
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Select Job</label>
            <select
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="jobTitle"
              value={this.state.jobTitle}> 
                <option value="DESIGN_WEB">DESIGN WEB</option>
                <option value="SCRUM">SCRUM</option>
                <option value="DATA_BASE">DATA_BASE</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="twitter"
              value={this.state.twitter}
            />
          </div>
          <button
            type="submit"
            onClick={this.handleClick}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;

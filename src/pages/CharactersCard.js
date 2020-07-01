import React from "react";
import CharactersList from "../components/CharactersList";
import Pagination from "../components/Pagination";

import "./styles/Badges.css";

import conflogo from "../images/Rick_and_Morty.svg";

class Characters extends React.Component {
  constructor (props) {
    super(props);
  
    this.state = {
      loading : true,
      error : null,
      data : {
        info: {
          next : null,
          prev : null,
        },
        results: [],        
      }
    }
  }

  componentDidMount() {
    this.fetchCharacters(null);
  } 
  
  fetchCharacters = async (_link) => {
    this.setState({
      loading : true,
      error: null
    })
    
    let link = _link

    if (link === null) {
      link = 'https://rickandmortyapi.com/api/character';
    }

    // Forma tradicional
    /* const resp = await fetch('https://rickandmortyapi.com/api/character');
    const data = await resp.json(); */
    
    // Forma moderna llamado asincrono
    console.log(link)

    fetch(link, {method: 'GET',})
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          console.log(response.status)
          if (response.status == 404) {
            //console.log('Error is: ', error)
            this.setState({
              loadign: false,
              error: "Some error happend maybe 404"
            });
          }
          return Promise.reject('Some error happend maybe 404')
        }
      } )
      .then(data => { 
        // this.setState({ data: json, loading: false, })
        console.log('Respuesta: ', data)
        // simular una demora a la api
        setTimeout(() => {
          this.setState({
            loading: false,
            data: data,
          })  
        }, 0);
      }).catch(error => {
        //console.log('Error is: ', error)
        this.setState({loading: false, error: error})
      })

  };

  render() {
    if (this.state.error !== null) {
      return <div className="alert alert-danger" role="alert">
        {this.state.error}
      </div>
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={conflogo} alt="" className="img-fluid"/>
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <ul className="pagination">
              <li className={this.state.data.info.prev === null ? 'page-item disabled':'page-item '}>
                <a className="page-link" 
                  href="#" 
                  onClick={() => this.state.data.info.prev !== null && (this.fetchCharacters(this.state.data.info.prev)) }
                  aria-label="Previous">
                  Previous
                </a>
              </li>
              
              { <li className={this.state.data.info.next === null ? 'page-item disabled':'page-item '}>
                <a className="page-link" href="#" onClick={() => this.fetchCharacters(this.state.data.info.next) }> 
                  Next</a>
              </li> }
            </ul>

            {/* <Pagination 
              url_prev={this.state.data.info.prev} 
              url_next={this.state.data.info.next}
              
               /> */}

           
          </div>
          
          {this.state.data.results.length !== 0 && ( 
            <CharactersList cards={this.state.data.results}/>)
          }

          {this.state.loading && (<div>Loading...</div>)}
        </div>
      </React.Fragment>
    );
  }
}

export default Characters;

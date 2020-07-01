import React from "react";

import "./styles/BadgesList.css";

class CharactersListItem extends React.Component {
render() {
  return (
    <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.character.image}
          alt={`${this.props.character.name}`}
        />

        <div>
          <strong>
            {this.props.character.name}
          </strong>
          
          <div><small>{this.props.character.species} {this.props.character.status}</small></div>
          <div><small>{this.props.character.gender}</small></div>

          
        </div>
      </div>
    );
  }
}

class CharactersList extends React.Component {
  render () {
    return (
      <div className="Badges__container">
        <div className="BadgesList">
          <ul className="list-unstyled">
            {this.props.cards.map((card) => {
              return (
                <li key={card.id}>
                  <CharactersListItem character={card} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default CharactersList;
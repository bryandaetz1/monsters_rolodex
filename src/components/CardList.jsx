import { Component } from "react";

import "../css/CardList.css";
import Card from "./Card";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster}></Card>;
        })}
      </div>
    );
  }
}

export default CardList;

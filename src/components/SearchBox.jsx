import { Component } from "react";

import "../css/SearchBox.css";

class SearchBox extends Component {
  render() {
    const { className, placeholder, onChangeHandler } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;

import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  handleSearchInputChanges = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  resetInputField = () => {
    this.setState({ searchValue: '' });
  };

  callSearchFunction = (e) => {
    e.preventDefault();
    const { search } = this.props;
    const { searchValue } = this.state;
    search(searchValue);
    this.resetInputField();
  };

  render() {
    const { searchValue } = this.state;

    return (
      <form className="search">
        <input
          type="text"
          value={searchValue}
          onChange={this.handleSearchInputChanges}
        />
        <button onClick={this.callSearchFunction} type="submit">
          <FaSearch />
        </button>
      </form>
    );
  }
}

export default Search;

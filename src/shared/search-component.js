import React, { Component, PropTypes } from 'react';

export default class SearchComponent extends Component {

  handleSearch = (e) => {
    let query = e.target.value;
    if (this.searchPointer) {
      clearTimeout(this.searchPointer);
    }
    this.setState({
      search: query
    });
    this.searchPointer = setTimeout(() => this.props.handleSearchChanged(query), 400);
  }

  handleClearSearch = () => {
    this.setState({
      search: ''
    });
    this.props.handleSearchChanged(undefined);
  }

  state = {
    search: this.props.search
  }

  render() {
    return (
      <div className="search-container">
        <input name='search' placeholder={this.props.placeholder} type='text' value={this.state.search} onChange={this.handleSearch } />
        {(this.state.search) ? <span className="clear-search" onClick={this.handleClearSearch}>X</span> : ''}
      </div>
    );
  }
}

SearchComponent.defaultProps = {
  search: '',
  handleSearchChanged: () => {}
};

SearchComponent.propTypes = {
  search: PropTypes.string,
  handleSearchChanged: PropTypes.func,
  placeholder: PropTypes.string,
};

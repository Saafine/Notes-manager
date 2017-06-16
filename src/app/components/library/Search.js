import React from 'react';

// This component can be reused, if paired with _search.scss and font awesome stylesheet.
// -------------------------------------------------------------------
// Description:
// It expands and closes on search button click

export default class Search extends React.Component {
  constructor () {
    super();
    this.state = {
      searchOpened: true
    };
  }

  toggleSearch () {
    this.setState(() => {
      return {searchOpened: !this.state.searchOpened};
    });
  }

  render () {
    let toggleSearch = this.state.searchOpened ? {width: '200px'} : {width: '0px'};
    return (
      <div>
        <a onClick={() => this.toggleSearch()}>
          <span><i class="fa fa-search" aria-hidden="true"></i></span>
        </a>
        <input style={toggleSearch} class="t-search" type="text" placeholder="Search..."/>
      </div>
    );
  }
}
import React from 'react';

// This component can be reused, if paired with _search.scss and font awesome stylesheet.
// -------------------------------------------------------------------
// Description:
// It expands and closes on search button click

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchOpened: 0
    };
  }

  toggleSearch() {
    this.setState(() => {
      return { searchOpened: !this.state.searchOpened};
    });
  }

  renderSearch() {
    return this.state.searchOpened ? {width: '0px'} : {width: '200px'};
  }

  render() {
    return (
        <wrap>
          <a onClick={() => this.toggleSearch()}>
            <span><i class="fa fa-search" aria-hidden="true"></i></span>
          </a>
          <input style={this.renderSearch()} class="t-search" type="text"  placeholder="Search..."/>
        </wrap>
    );
  }
}




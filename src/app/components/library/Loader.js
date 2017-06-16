import React from 'react';
require('./loader.scss');

export default class Loader extends React.Component {
  render () {
    let displayLoader = this.props.loading ? 'block' : 'none';
    let displayChildren = this.props.loading ? 'none' : 'block';
    return (
      <div class="expand-height">
        <div class="loader-wrapper" style={{display: displayLoader}}>
          <div class="gear"></div>
        </div>
        <div class="expand-height" style={{display: displayChildren}}>
          {this.props.children}
        </div>
      </div>
    );
  }
};
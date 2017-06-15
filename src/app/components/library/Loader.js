import React from 'react';
require('./loader.scss');

const Loader = (props) => (
  <div class="loader-wrapper" style={{display: props.display}}>
    <div class="gear"></div>
  </div>
);

export default Loader;

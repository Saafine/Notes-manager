import React from 'react';
import Search from './library/Search';

// This component can be reused, if paired with _search.scss and font awesome stylesheet.
// -------------------------------------------------------------------
// Description:
// Navbar with expanding search input

const Navbar = () => {
  return (
      <nav>
        <ul>
          <li class="clickable">
            <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
          </li>
          <li class="clickable">
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </li>
          <li class="clickable active">
            <i class="fa fa-home" aria-hidden="true"></i><span>View All</span>
          </li>
          <li>
          /currentDirectory
          </li>
        </ul>
        <ul class="align-right">
          <li class="clickable reset-padding">
            <Search />
          </li>
          <li class="clickable">
            <i class="fa fa-th" aria-hidden="true"></i>
          </li>
          <li class="clickable">
            <i class="fa fa-th-large" aria-hidden="true"></i>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
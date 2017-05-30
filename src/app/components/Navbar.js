import React from 'react';
import Search from './library/Search';
import {active} from './library/helpers';
import { Link } from 'react-router-dom';
// Description:
// Navbar with expanding search input

const Navbar = () => {
  return (
      <nav>
        <ul class="align-left">
          <li class="clickable hidden-xs-down">
            <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
          </li>
          <li class="clickable hidden-xs-down">
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </li>
          <Link to="/">
            <li class={active('/') + ' clickable'}>
              <i class="fa fa-home" aria-hidden="true"></i><span class="hidden-xs-down">View All</span>
            </li>
          </Link>
          <li class="hidden-sm-down">
          /currentDirectory
          </li>
        </ul>
        <ul class="align-right">
          <li class="clickable reset-padding">
            <Search />
          </li>
          <li class="clickable hidden-xs-down">
            <i class="fa fa-th" aria-hidden="true"></i>
          </li>
          <li class="clickable hidden-xs-down">
            <i class="fa fa-th-large" aria-hidden="true"></i>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
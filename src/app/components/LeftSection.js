import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom'
import { active } from './library/helpers';
import { userFolders } from './userFolders'

export default
class LeftSection extends React.Component {
  render() {
    let folderList = userFolders.filter((folders) => { // no need to append trash folder to the sidebar, since it's statically defined in return below
      return folders.link !== 'trash';
    });

    folderList = folderList.map((folders, index) => {
      let toggleActive = active("/" + folders.link); // access helpers module from library and append 'active' class if current path location matches folder's link property
      return (
          <Link to={"/" + folders.link} key={index}>
            <li class={toggleActive}>
              <i class="fa fa-folder" aria-hidden="true"></i>
              <span>{folders.title}</span>
            </li>
          </Link>
      );
    });

    return (
        <Scrollbars
            autoHide={true}
            autoHideDuration={300}>
          <div class="sidebar-nav">
            <ul>
              <Link to="/">
                <li class={active('/')}>
                  <i class="fa fa-home" aria-hidden="true"></i>
                  <span>Home</span>
                </li>
              </Link>
              <Link to="/recent">
                <li class={active('/recent')}>
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                  <span>Recent</span>
                </li>
              </Link>
              <Link to="/trash">
                <li class={active('/trash')}>
                  <i class="fa fa-trash" aria-hidden="true"></i>
                  <span>Trash</span>
                </li>
              </Link>
              <hr/>
                {folderList}
            </ul>
          </div>
        </Scrollbars>
    );
  }
}
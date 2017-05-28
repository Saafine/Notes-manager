import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export default
class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      leftWidth: {
        width: '15%'
      },
      rightWidth: {
        width: '85%'
      }
    }
  }

  dragHandler(e) {
    e.preventDefault()
    let mouseX = e.clientX;
    let w = window.innerWidth;
    let newLeftWidth = Math.floor((mouseX/w*100))+1;
    let newRightWidth = 100 - newLeftWidth;
    console.log(newLeftWidth, newRightWidth);
    this.setState(() => {
      return {
        leftWidth: {
          width: newLeftWidth+'%'
        },
        rightWidth: {
          width: newRightWidth+'%'
        }
      }
    });
  }

  render() {
    return (
        <div class="expand-height">
          <div class="main-content">
            <div class="main-content-left-wrap" style={this.state.leftWidth}>
              <div class="main-content-left">
                  <div class="sidebar-resizer" onDrop={(e) => this.dragHandler(e)}>
                    <span class="t-circle"></span>
                    <span class="t-circle"></span>
                    <span class="t-circle"></span>
                    <span class="t-circle"></span>
                  </div>
                  <Scrollbars
                      autoHide={true}
                      autoHideDuration={300}>
                    <div class="sidebar-nav">
                      <ul>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Recent</span>
                        </li>
                        <li class="active">
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>View All</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Cats</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Dogs</span>
                        </li>
                        <hr/>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Trash</span>
                        </li>
                      </ul>
                    </div>
                  </Scrollbars>
                </div>
            </div>
          </div>
          <div class="main-content-right-wrap" style={this.state.rightWidth}>
            <div class="main-content-right">
            cde cde cdecdecdecdecdecdecdecdecdecde
            </div>
          </div>
        </div>
    );
  }
}
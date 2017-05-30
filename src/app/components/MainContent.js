import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

export default class MainContent extends React.Component {
  constructor() {
    super();
    this.allowResizing = this.allowResizing.bind(this);
    this.startResize = this.startResize.bind(this);
    this.stopResize = this.stopResize.bind(this);
    this.resizeElementTag = document.getElementsByClassName('sidebar-resizer');
    this.state = {
      leftWidth: {
        width: '15%'
      },
      rightWidth: {
        width: '85%'
      }
    }
  }

  componentDidMount() {
    this.resizeElementTag[0].addEventListener('mousedown', this.allowResizing, false);
  }

  componentWillUnmount() {
    this.resizeElementTag[0].removeEventListener('mousedown', this.allowResizing, false);
  }

  allowResizing() {
    window.addEventListener('mousemove', this.startResize, false);
    window.addEventListener('mouseup', this.stopResize, false);
  }

  startResize(e) {
    e.preventDefault(); // prevent content selection
    let mouseX = e.clientX;
    let w = window.innerWidth;
    let newLeftWidth = mouseX/w*100;

    // set min & max values
    if (newLeftWidth < 10) {
      newLeftWidth = 10;
    }else if (newLeftWidth > 80){
      newLeftWidth = 80;
    }

    let newRightWidth = 100 - newLeftWidth;

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

  stopResize() {
    window.removeEventListener('mousemove', this.startResize, false);
    window.removeEventListener('mouseup', this.stopResize, false);
  }

  render() {
    return (
        <div class="expand-height">
          <div class="main-content">
            <div class="main-content-left-wrap" style={this.state.leftWidth}>
              <div class="main-content-left">
                  <div class="sidebar-resizer">
                    <span class="t-circle"></span>
                    <span class="t-circle"></span>
                    <span class="t-circle"></span>
                    <span class="t-circle"></span>
                  </div>
                    <LeftSection />
                </div>
            </div>
          <div class="main-content-right-wrap" style={this.state.rightWidth}>
              <div class="main-content-right">
                  <RightSection />
              </div>
          </div>
          </div>
        </div>
    );
  }
}
import React from 'react';
import TopBar from './parts/top-bar';
import SideBar from './parts/side-bar';

import './index.scss';

function Index(props) {

  return (
    <div className="full">
      <TopBar />
      <div className="fx frame-index frame-index-content-height">
        <SideBar />
        <div className="fx1">
          {props.children}
        </div>
      </div>
    </div>
  )
};

export default Index;
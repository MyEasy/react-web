import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { goto } from '../../../../utils';

import './index.scss';

function SideBar() {

  const [currentIndex, setCurrentIndex] = useState(null);


  const menuList = [
    {
      text: '菜单管理1',
      url: '',
      child: [
        {
          text: '1-child1',
          url: '/index1/index'
        },
      ],
    },
    {
      text: '菜单管理2',
      url: '',
      child: [
        {
          text: '2-child1',
          url: '/index2/index'
        },
      ],
    },
  ];

  const handleMenuClick = (url) => () => {
    window.his.push(
      `${window.his.location.pathname}/${url}`,
    );
  }

  return (
    <div className="side-bar tc pointer">
      {
        menuList.map((menu, index) => {
          return (
            <div key={index}>
              <div
                className={`side-bar-front side-bar-menu ${index === currentIndex ? 'side-bar-active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              >
                {menu.text}
              </div>
              {
                menu.child.map((child, childIndex) => {
                  return (
                    // <div
                    //   key={childIndex}
                    //   className={`side-bar-front side-bar-menu-child ${index === currentIndex ? 'side-bar-show': ''}`}
                    //   onClick={handleMenuClick(child.url)}
                    // >
                    //   {child.text}
                    // </div>
                    <Link
                      to={child.url}
                      key={childIndex}
                      className={`side-bar-front side-bar-menu-child ${index === currentIndex ? 'side-bar-show': ''}`}
                    >
                      {child.text}
                    </Link>
                  )
                })
              }
            </div>
          )
        })
      }
      <span></span>
    </div>
  )
};

export default SideBar;

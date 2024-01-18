import React, { useState, useEffect, useContext } from 'react';
import './Sidebar.css';
import { personsImgs } from '../../utils/images';
import { navigationLinks } from '../../data/data';
import { SidebarContext } from '../../Context/sidebarContext';

const Sidebar = () => {
  // Change to a state setter to allow updating the active link index
  const [activeLinkIdx, setActiveLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState('');
  const { isSidebarOpen } = useContext(SidebarContext);

  // Use effect to update the sidebar class based on the sidebar state
  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);

  // Function to handle link click and update active link index
  const handleLinkClick = (index) => {
    setActiveLinkIdx(index);
  };

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_two} alt="profile image" />
        </div>
        <span className="info-name">Alice Doe</span>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink, index) => (
            <li className="nav-item" key={navigationLink.id}>
              <a
                href={navigationLink.link}
                className={`nav-link ${
                  navigationLink.id === activeLinkIdx ? 'active' : ''
                }`}
                // Add click handler here
                onClick={() => handleLinkClick(navigationLink.id)}
              >
                <img
                  src={navigationLink.image}
                  alt={navigationLink.title}
                  className="nav-link-icon"
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

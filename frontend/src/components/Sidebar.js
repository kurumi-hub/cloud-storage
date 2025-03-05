import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>CDN File Manager</h2>
      <ul>
        <li><a href="#">Files</a></li>
        <li><a href="#">Upload File(s)</a></li>
        <li><a href="#">New Folder</a></li>
        <li><a href="#">Options</a></li>
        <li><a href="#">Sign Out</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;

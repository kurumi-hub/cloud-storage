import React from 'react';

function FileItem({ file }) {
  return (
    <div className="file-item">
      {file.type === 'folder' ? (
        <div className="folder">
          <span>📁</span>
          <span>{file.name}</span>
        </div>
      ) : (
        <div className="file">
          <span>📄</span>
          <span>{file.name}</span>
          <span>{file.size}</span>
          <span>{file.modified}</span>
        </div>
      )}
    </div>
  );
}

export default FileItem;

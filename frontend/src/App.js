import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import FileManager from './components/FileManager';

function App() {
  const [files, setFiles] = useState([]);
  const [fileName, setFileName] = useState('');

  // Tải danh sách file từ backend
  const loadFiles = async () => {
    const response = await fetch('http://localhost:5000/files');
    const files = await response.json();
    setFiles(files);
  };

  // Upload file
  const handleFileUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', event.target.file.files[0]);

    const response = await fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('File uploaded successfully');
      loadFiles(); // Tải lại danh sách file
    } else {
      alert('Error uploading file');
    }
  };

  // Tải file
  const handleDownload = (filename) => {
    window.location.href = `http://localhost:5000/download/${filename}`;
  };

  useEffect(() => {
    loadFiles();
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <div className="file-manager">
        <h1>File Management</h1>

        <form onSubmit={handleFileUpload} encType="multipart/form-data">
          <input type="file" name="file" required />
          <button type="submit">Upload File</button>
        </form>

        <h2>Available Files</h2>
        <ul>
          {files.map((file, index) => (
            <li key={index}>
              {file} <button onClick={() => handleDownload(file)}>Download</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

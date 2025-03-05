import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Giúp gửi yêu cầu HTTP đến backend
import FileItem from './FileItem';

function FileManager() {
  const [files, setFiles] = useState([]); // Dữ liệu tệp sẽ được tải từ backend
  const [file, setFile] = useState(null);

  // Lấy danh sách các tệp từ backend
  useEffect(() => {
    axios.get('http://localhost:5000/files') // Gửi yêu cầu GET đến backend để lấy danh sách tệp
      .then(response => {
        setFiles(response.data); // Lưu danh sách tệp vào state
      })
      .catch(error => {
        console.error('Error fetching files:', error);
      });
  }, []); // useEffect chỉ chạy 1 lần khi component được render lần đầu tiên

  // Xử lý tải tệp lên
  const handleFileUpload = (e) => {
    const formData = new FormData(); // Tạo FormData để gửi tệp
    formData.append('file', e.target.files[0]); // Thêm tệp vào FormData

    axios.post('http://localhost:5000/upload', formData) // Gửi tệp đến backend qua API POST
      .then(response => {
        setFiles([...files, response.data.file.filename]); // Thêm tệp mới vào danh sách
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
  };

  return (
    <div className="file-manager">
      <div className="file-manager-header">
        <button className="btn">Refresh</button>
        <input type="file" onChange={handleFileUpload} /> {/* Chọn tệp để tải lên */}
        <button className="btn">Ignore Folder Structure</button>
        <button className="btn">Grid View</button>
      </div>
      <div className="file-list">
        {files.map((file, index) => ( // Lặp qua danh sách các tệp và hiển thị từng tệp
          <FileItem key={index} file={{ name: file, type: 'file' }} />
        ))}
      </div>
    </div>
  );
}

export default FileManager;

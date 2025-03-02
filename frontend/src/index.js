import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

// Kiểm tra biến môi trường
const apiUrl = process.env.REACT_APP_API_URL;
console.log("API URL:", apiUrl); // Kiểm tra giá trị của API URL

ReactDOM.render(
  <App />, // Đúng cách sử dụng JSX
  document.getElementById('root')
);

// Nếu muốn sử dụng Service Worker, thay unregister() thành register()
serviceWorker.unregister();

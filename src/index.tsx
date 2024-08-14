import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // 导入App组件

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // 将App挂载到public/index.html中的root元素上
);

import React from 'react';
// 国际化
import { ConfigProvider, } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

// app
import App from './App';

// 全局公共样式
import '../styles/index.scss';

// eslint-disable-next-line
export default () => (
  <ConfigProvider locale={zh_CN}>
    <App />
  </ConfigProvider>
);

import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// 为避免 document.getElementById('root') 返回 null 导致类型不匹配问题，添加非空断言操作符 !
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './src/assets/css/style.css';
import './src/assets/css/custom.css';
import './src/assets/css/vendor.min.css';

import Header from './src/components/header';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header />
  </StrictMode>
);

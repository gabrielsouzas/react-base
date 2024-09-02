import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import RoutesConfig from './routes/routes';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesConfig />
      <GlobalStyle />
      <ToastContainer autoClose={3000} className="toast-container" />
    </BrowserRouter>
  );
}

export default App;

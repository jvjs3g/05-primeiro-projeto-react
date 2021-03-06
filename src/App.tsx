import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobolStyle from './styles/global';
import Routes from './routes/index';

const  App:React.FC = () => (
  <>
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
  <GlobolStyle/>
  </>
);

export default App;

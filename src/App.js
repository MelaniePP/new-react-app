import React from 'react';
import logo from './logo.svg';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import stores from './stores';
import './App.css';
import getRoutes from './router'

function App() {
  return (
    <Provider {...stores}>
      <HashRouter>
        {getRoutes()}
      </HashRouter>
    </Provider>

  );
}

export default App;

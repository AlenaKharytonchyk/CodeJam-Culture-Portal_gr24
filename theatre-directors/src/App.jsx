import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import NavBar from './components/NavBar';
import PageContainer from './components/PageContainer';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Developers from './pages/Developers';

library.add(faEnvelope);

function App() {
  return (
    <div className="App">
      <CssBaseLine />
      <NavBar />
      <PageContainer labels={['Home', 'Directors', 'Developers']}>
        <Home />
        <Directors />
        <Developers />
      </PageContainer>
    </div>
  );
}

export default App;

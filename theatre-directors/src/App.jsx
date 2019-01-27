import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import IntlProvider from 'react-intl';
import './App.css';
import NavBar from './components/NavBar';
import PageContainer from './components/PageContainer';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Developers from './pages/Developers';


function App() {
  return (
    <IntlProvider>
      <div className="App">
        <CssBaseLine />
        <NavBar />
        <PageContainer labels={['Home', 'Directors', 'Developers']}>
          <Home />
          <Directors />
          <Developers />
        </PageContainer>
      </div>
    </IntlProvider>
  );
}

export default App;

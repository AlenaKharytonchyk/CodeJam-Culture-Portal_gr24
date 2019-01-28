import React from 'react';
import PropTypes from 'prop-types';
import CssBaseLine from '@material-ui/core/CssBaseline';
import './App.css';
import { translate } from 'react-i18next';
import NavBar from './components/NavBar';
import PageContainer from './components/PageContainer';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Developers from './pages/Developers';

function App(props) {
  const { t } = props;
  return (
    <div className="App">
      <CssBaseLine />
      <NavBar />
      <PageContainer labels={[
        t('tabs.home', { framework: 'react-i18next' }),
        t('tabs.directors', { framework: 'react-i18next' }),
        t('tabs.developers', { framework: 'react-i18next' }),
      ]}
      >
        <Home />
        <Directors />
        <Developers />
      </PageContainer>
    </div>
  );
}

App.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate('common')(App);

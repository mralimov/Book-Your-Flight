import React from 'react';
import Nav from './components/Nav/Nav';
import MainForm from './components/Form/MainForm';
import FooterNav from './components/Footer/FooterNav';

export const App = () => {
  return (
    <div className='body-wrapper'>
      <Nav />
      <MainForm />
      <FooterNav />
    </div>
  );
};

import React, { Fragment } from 'react';
import NavigationBar from '../../Elements/NavigationBar/NavigationBar';
import TopBanner from './../../Elements/TopBanner/TopBanner';

const Header = () => {
  return (
    <Fragment>
    <NavigationBar></NavigationBar>
    <TopBanner></TopBanner>
    </Fragment>
  );
};

export default Header;
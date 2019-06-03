import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
      <A href="https://dminc.com/">
        <Img src={Banner} alt="DMI Connect - Banner" />
      </A>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.stringsPage} />
        </HeaderLink>
        <HeaderLink to="/addMessage">
          <FormattedMessage {...messages.addStringPage} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;

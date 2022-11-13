import React, { useEffect, useState } from 'react';

import { Navbar, Footer, PopUp } from '../..';

// eslint-disable-next-line
const Layout = ({ children, ...props }) => {
  const [popUp, setPopUp] = useState(false);
  const [userAccount, setUserAccount] = useState('');
  useEffect(() => {
    if (userAccount && popUp) {
      setPopUp(false);
    }
  }, [userAccount, popUp]);
  return (
    <section {...props}>
      <Navbar openPopUp={() => setPopUp(true)} account={userAccount} />
      <PopUp
        {...{
          popUp,
          toggle: () => setPopUp((props) => !props),
          setAccount: (arg) => setUserAccount(arg),
        }}
      />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;

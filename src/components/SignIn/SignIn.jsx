import React from 'react';
import { useHistory } from 'react-router-dom';

// import Header from '../../components/header/header';
import Button from '../Button/Button.jsx';
import Inputbox from '../Inputbox/Inputbox.jsx';

import './SignIn.scss';

function Signin() {
  const history = useHistory();

  const loginToSite = () => {
    history.push('/movies');
  };

  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      <Inputbox placeholder="Enter Username" error="someerror" />
      <Inputbox placeholder="Enter Password" />
      <Button
        className="signin-btn"
        title="Sign In"
        onClick={loginToSite}
      />
      {/* <Header></Header> */}
    </div>
  );
}

export default Signin;

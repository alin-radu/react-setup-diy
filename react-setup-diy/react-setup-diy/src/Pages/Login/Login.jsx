import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button/Button.jsx';
import Signin from '../../components/SignIn/SignIn.jsx';

import logo from '../../assets/logo.png';

import './Login.scss';

function Login() {
  const history = useHistory();

  const signInToMoviesNow = () => {
    history.push('/movies');
  };

  return (
    <div className="background">
      <header>
        <img className="logo-img" src={logo} alt="logo" />
        <div>
          <Button title="Sign In" onClick={signInToMoviesNow} />
        </div>
      </header>
      <main>
        <Signin />
        {/* <h1>Watch TV Shows , Movies !!</h1>
        <h3> Subscribe now , Cancel anytime</h3> */}
      </main>
    </div>
  );
}

export default Login;

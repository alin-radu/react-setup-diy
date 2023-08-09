import { ClickCounter } from './ClickCounter';

import './styles.css';

import IMAGE from './react.png';
import LOGO from './logo.svg';

export const App = () => {
  return (
    <>
      <h1>React TypeScript Webpack Starter Template, refreshed</h1>
      <h1>mode: {process.env.NODE_ENV}</h1>
      <h1>status: {process.env.name}</h1>
      <img src={IMAGE} alt="React logo" width="200" height="200" />
      <img src={LOGO} alt="React logo" width="200" />
      <ClickCounter />
    </>
  );
};

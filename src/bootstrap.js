import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './components/app';

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

function main() {
  ReactDOM.render(
    <Auth0Provider 
      domain="dev-bp1vgx7mccwuj3o4.eu.auth0.com" 
      clientId="lsAbOcMLITbONKsyfX4TfJv8Rb5eu9xc" 
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
    
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);

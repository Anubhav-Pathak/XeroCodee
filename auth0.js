import auth0 from 'auth0-js';

const auth0Client = new auth0.WebAuth({
  domain: process.env.BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  responseType: 'token id_token',
});

export default auth0Client;
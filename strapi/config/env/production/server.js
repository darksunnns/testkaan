// Path: ./config/env/production/server.js`
export default ({ env }) => ({
  proxy: true,
  url: env('https://etkinlik-3f13142e5aab.herokuapp.com/'), // Sets the public URL of the application.
  app: { 
       keys: env.array('APP_KEYS')
     },
 });

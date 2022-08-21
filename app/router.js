import EmberRouter from '@ember/routing/router';
import config from 'embu/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('logins', function () {
    this.route('testt');
  });
  this.route('register');
  this.route('succcess');
  this.route('error');
  this.route('roomselect');
});

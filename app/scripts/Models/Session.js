import Backbone from 'backbone';

import settings from '../settings';
import store from '../store';

export default Backbone.Model.extend({
  urlRoot: `${settings.apiURL}user/${settings.appKey}`,
  login: function(username, password) {
    return new Promise((resolve, reject) => {
      store.session.save({
        username: username,
        password: password
      }, {
        success: function(model, response) {
          localStorage.clear();
          window.sessionStorage.setItem('authtoken', response._kmd.authtoken);
          window.sessionStorage.setItem('username', response.username);
          model.unset('password');
          store.session.set({
            username: username,
            authtoken: response._kmd.authtoken
          });
          resolve(response);
        },
        error: function(response) {
          resolve();
        }
      });
    });
  },
  retrieve: function() {
    this.fetch({
        url: `${settings.apiURL}user/${settings.appKey}/_me`
    });
  },
  signup: function(firstName, lastName, username, password, email) {
    return new Promise((resolve, reject) => {
      localStorage.clear();
      store.users.create({
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName
      }, {
        success: function(response) {
          window.sessionStorage.setItem('authtoken', response.get('_kmd').authtoken);
          window.sessionStorage.setItem('username', response.get('username'));
          response.unset('password');
          store.session.set({
            username: username,
            authtoken: response.get('_kmd').authtoken
          });
          resolve(response);
        },
        error: function(response) {
          resolve();
        }
      });
    })
  }
});

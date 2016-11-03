import $ from 'jquery';
import Backbone from 'backbone';

import Login from './Views/Login';
import Signup from './Views/Signup';

const Router = Backbone.Router.extend({
  routes: {
    login: 'loginFunction',
    signup: 'signupFunction'
  },
  loginFunction: function() {
    let login = new Login();
    $('.container').empty().append(login.render().$el);
  },
  signupFunction: function() {
    let signup = new Signup();
    $('.container').empty().append(signup.render().$el);
  }
});

const router = new Router();

export default router;

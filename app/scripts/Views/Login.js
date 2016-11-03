import $ from 'jquery';
import Backbone from 'backbone';

export default Backbone.View.extend({
  tagName: 'main',
  className: 'login-wrapper',
  template: () => {
    return (`
      <nav>
        <a href="#">Home</a>
        <a href="#">Logout</a>
      </nav>
      <form class="login-form">
        <h3>LOG IN</h3>
        <label for="username">username</label>
        <input type="text" name="username" id="username" placeholder="username"/>
        <label for="password">password</label>
        <input type="password" name="password" id="password" placeholder="password"/>
        <a href="#signup">Need an account? Sign up!</a>
        <input type="submit" value="submit"/>
      </form>
    `);
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

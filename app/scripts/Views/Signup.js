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
        <h3>SIGN UP</h3>
        <label for="first-name">first name</label>
        <input type="text" name="first-name" id="first-name" placeholder="first name"/>
        <label for="last-name">last name</label>
        <input type="text" name="last-name" id="last-name" placeholder="last name"/>
        <label for="username">username</label>
        <input type="text" name="username" id="username" placeholder="username"/>
        <label for="password">password</label>
        <input type="password" name="password" id="password" placeholder="password"/>
        <a href="#login">Already have an account? Login!</a>
        <input type="submit" value="submit"/>
      </form>
    `);
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

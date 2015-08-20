var $ = require('jquery');
var Backbone = require('backbone');
var signUpTemplate = require('../templates/signup.hbs');

var App = require('../app');

var SignUp = Backbone.View.extend({
  el: $('main'),

  render: function () {
    var _this = this;
      _this.$el.html(signUpTemplate());
  },

  events: {
  	"submit form.newUser": "newUser"
  },

  newUser: function (e) {
  	e.preventDefault();
  	App.router.navigate('#', { trigger: true });
  }
});

module.exports = SignUp;

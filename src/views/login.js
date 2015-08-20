var $ = require('jquery');
var Backbone = require('backbone');
var loginTemplate = require('../templates/login.hbs');

var App = require('../app');

var LogIn = Backbone.View.extend({
  el: $('main'),

  render: function () {
    var _this = this;
      _this.$el.html(loginTemplate());
  },

  events: {
  	"submit form.logIn": "logIn"
  },

  logIn: function (e) {
  	e.preventDefault();
  	App.router.navigate('#', { trigger: true });
  	$('.option1').hide();
  	$('.option2').show();
  }
})

module.exports = LogIn;
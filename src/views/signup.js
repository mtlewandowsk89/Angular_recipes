var $ = require('jquery');
var Backbone = require('backbone');
var signUpTemplate = require('../templates/signup.hbs');

var App = require('../app');

var SignUp = Backbone.View.extend({
  el: $('main'),

  render: function () {
    var _this = this;
      _this.$el.html(signUpTemplate());
    }
});

module.exports = SignUp;
var $ = require('jquery');
var Backbone = require('backbone');
var loginTemplate = require('../templates/login.hbs');

var App = require('../app');

var LogIn = Backbone.View.extend({
  el: $('main'),

  render: function () {
    var _this = this;
      _this.$el.html(loginTemplate());
  }
});

module.exports = LogIn;
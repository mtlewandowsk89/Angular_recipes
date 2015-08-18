var $ = require('jquery');
var Backbone = require('backbone');
var homeTemplate = require('../templates/home.hbs');

var App = require('../app');

var Home = Backbone.View.extend({
  el: $('main'),

  render: function () {
    var _this = this;
      _this.$el.html(homeTemplate());
  }
});

module.exports = Home;
var $ = require('jquery');
var Backbone = require('backbone');
var aboutUsTemplate = require('../templates/about-us.hbs');

var App = require('../app');

var AboutUs = Backbone.View.extend({
  el: $('main'),

  render: function () {
    var _this = this;
      _this.$el.html(aboutUsTemplate());
    }
});

module.exports = AboutUs;
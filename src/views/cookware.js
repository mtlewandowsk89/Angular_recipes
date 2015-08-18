var $ = require('jquery');
var Backbone = require('backbone');
var cookwareTemplate = require('../templates/cookware.hbs');

var App = require('../app');

var Cookware = Backbone.View.extend({
  el: $('main'),

  render: function () {
    var _this = this;
      _this.$el.html(cookwareTemplate());
  }
});

module.exports = Cookware;
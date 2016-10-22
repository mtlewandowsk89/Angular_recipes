// var $ = require('jquery');
// var Backbone = require('backbone');
// var cookwareTemplate = require('../templates/cookware.hbs');

// var App = require('../app');

// var Cookware = Backbone.View.extend({
//   el: $('main'),

//   render: function () {
//     var _this = this;
//       _this.$el.html(cookwareTemplate());
//   },

//   events: {
//   	"mouseover .tongs": "showImage1",
//   	"mouseover .Mspatula": "showImage2",
//   	"mouseover .Rspatula": "showImage3",
//   	"mouseover .slotted": "showImage4",
//   	"mouseover .whisk": "showImage5",
//   	"mouseover .Cknife": "showImage6",
//   	"mouseover .grater": "showImage7",
//   	"mouseover .Bknife": "showImage8",
//   	"mouseover .opener": "showImage9",
//   	"mouseover .thermometer": "showImage10",
//   	"mouseover .measuringCup": "showImage11",
//   	"mouseover .measuringSpoon": "showImage12",
//   	"mouseover .timer": "showImage13",
//   	"mouseover .cuttingBoard": "showImage14",
//   	"mouseover .mixingBowl": "showImage15",
//   	"mouseover .fryingPan": "showImage16",
//   	"mouseover .saucePan": "showImage17",
//   	"mouseover .bakingPan": "showImage18",
//   	"mouseover .ovenMitts": "showImage19",
//     "mouseover .recommendations": "unselect",
//     "mouseleave .recommendations": "reselect"
//   },

//   showImage1: function (e) {
//   	$('.t').show()
//   	$('.m').hide()
//   	$('.r').hide()
//   	$('.s').hide()
//   	$('.w').hide()
//   	$('.c').hide()
//   	$('.g').hide()
//   	$('.b').hide()
//   	$('.o').hide()
//   	$('.T').hide()
//   	$('.M').hide()
//   	$('.ms').hide()
//   	$('.z').hide()
//   	$('.cb').hide()
//   	$('.mb').hide()
//   	$('.f').hide()
//   	$('.sp').hide()
//   	$('.bp').hide()
//   	$('.om').hide()
//   },

//   showImage2: function (e) {
//   	$('.m').show()
//   	$('.t').hide()
//   	$('.r').hide()
//   	$('.s').hide()
//   	$('.w').hide()
//   	$('.c').hide()
//   	$('.g').hide()
//   	$('.b').hide()
//   	$('.o').hide()
//   	$('.T').hide()
//   	$('.M').hide()
//   	$('.ms').hide()
//   	$('.z').hide()
//   	$('.cb').hide()
//   	$('.mb').hide()
//   	$('.f').hide()
//   	$('.sp').hide()
//   	$('.bp').hide()
//   	$('.om').hide()
//   },

//   showImage3: function (e) {
//   	$('.r').show()
//   	$('.t').hide()
//   	$('.m').hide()
//   	$('.s').hide()
//   	$('.w').hide()
//   	$('.c').hide()
//   	$('.g').hide()
//   	$('.b').hide()
//   	$('.o').hide()
//   	$('.T').hide()
//   	$('.M').hide()
//   	$('.ms').hide()
//   	$('.z').hide()
//   	$('.cb').hide()
//   	$('.mb').hide()
//   	$('.f').hide()
//   	$('.sp').hide()
//   	$('.bp').hide()
//   	$('.om').hide()
//   },

//   showImage4: function (e) {
//   	$('.s').show()
//   	$('.t').hide()
//   	$('.m').hide()
//   	$('.r').hide()
//   	$('.w').hide()
//   	$('.c').hide()
//   	$('.g').hide()
//   	$('.b').hide()
//   	$('.o').hide()
//   	$('.T').hide()
//   	$('.M').hide()
//   	$('.ms').hide()
//   	$('.z').hide()
//   	$('.cb').hide()
//   	$('.mb').hide()
//   	$('.f').hide()
//   	$('.sp').hide()
//   	$('.bp').hide()
//   	$('.om').hide()
//   },

//   showImage5: function (e) {
//   	$('.w').show()
//   	$('.t').hide()
//   	$('.m').hide()
//   	$('.r').hide()
//   	$('.s').hide()
//   	$('.c').hide()
//   	$('.g').hide()
//   	$('.b').hide()
//   	$('.o').hide()
//   	$('.T').hide()
//   	$('.M').hide()
//   	$('.ms').hide()
//   	$('.z').hide()
//   	$('.cb').hide()
//   	$('.mb').hide()
//   	$('.f').hide()
//   	$('.sp').hide()
//   	$('.bp').hide()
//   	$('.om').hide()
//   },

//   showImage6: function (e) {
//   	$('.c').show()
//   	$('.t').hide()
//   	$('.m').hide()
//   	$('.r').hide()
//   	$('.s').hide()
//   	$('.w').hide()
//   	$('.g').hide()
//   	$('.b').hide()
//   	$('.o').hide()
//   	$('.T').hide()
//   	$('.M').hide()
//   	$('.ms').hide()
//   	$('.z').hide()
//   	$('.cb').hide()
//   	$('.mb').hide()
//   	$('.f').hide()
//   	$('.sp').hide()
//   	$('.bp').hide()
//   	$('.om').hide()
//   },

//   showImage7: function (e) {
//   	$('.g').show()
//   	$('.t').hide()
//   	$('.m').hide()
//   	$('.r').hide()
//   	$('.s').hide()
//   	$('.w').hide()
//   	$('.c').hide()
//   	$('.b').hide()
//   	$('.o').hide()
//   	$('.T').hide()
//   	$('.M').hide()
//   	$('.ms').hide()
//   	$('.z').hide()
//   	$('.cb').hide()
//   	$('.mb').hide()
//   	$('.f').hide()
//   	$('.sp').hide()
//   	$('.bp').hide()
//   	$('.om').hide()
//   },

//   showImage8: function (e) {
//   	$('.b').show()
//   	$('.t').hide()
//   	$('.m').hide()
//   	$('.r').hide()
//   	$('.s').hide()
//   	$('.w').hide()
//   	$('.c').hide()
//   	$('.g').hide()
//   	$('.o').hide()
//   	$('.T').hide()
//   	$('.M').hide()
//   	$('.ms').hide()
//   	$('.z').hide()
//   	$('.cb').hide()
//   	$('.mb').hide()
//   	$('.f').hide()
//   	$('.sp').hide()
//   	$('.bp').hide()
//   	$('.om').hide()
//   },

//   showImage9: function (e) {
//   	$('.o').show()
//   	$('.t').hide()
//   	$('.m').hide()
//   	$('.r').hide()
//   	$('.s').hide()
//   	$('.w').hide()
//   	$('.c').hide()
//   	$('.g').hide()
//   	$('.b').hide()
//   	$('.T').hide()
//   	$('.M').hide()
//   	$('.ms').hide()
//   	$('.z').hide()
//   	$('.cb').hide()
//   	$('.mb').hide()
//   	$('.f').hide()
//   	$('.sp').hide()
//   	$('.bp').hide()
//   	$('.om').hide()
//   },

//   showImage10: function (e) {
//   	$('.T').show()
//   	$('.t').hide()
//   	$('.m').hide()
//   	$('.r').hide()
//   	$('.s').hide()
//   	$('.w').hide()
//   	$('.c').hide()
//   	$('.g').hide()
//   	$('.b').hide()
//   	$('.o').hide()
//   	$('.M').hide()
//   	$('.ms').hide()
//   	$('.z').hide()
//   	$('.cb').hide()
//   	$('.mb').hide()
//   	$('.f').hide()
//   	$('.sp').hide()
//   	$('.bp').hide()
//   	$('.om').hide()
//   },

//   showImage11: function (e) {
//   	$('.M').show()
//   	$('.t').hide()
//   	$('.m').hide()
//   	$('.r').hide()
//   	$('.s').hide()
//   	$('.w').hide()
//   	$('.c').hide()
//   	$('.g').hide()
//   	$('.b').hide()
//   	$('.o').hide()
//   	$('.T').hide()
//   	$('.ms').hide()
//   	$('.z').hide()
//   	$('.cb').hide()
//   	$('.mb').hide()
//   	$('.f').hide()
//   	$('.sp').hide()
//   	$('.bp').hide()
//   	$('.om').hide()
//   },

//   showImage12: function (e) {
//   	$('.ms').show()
//   	$('.t').hide()
//   	$('.m').hide()
//   	$('.r').hide()
//   	$('.s').hide()
//   	$('.w').hide()
//   	$('.c').hide()
//   	$('.g').hide()
//   	$('.b').hide()
//   	$('.o').hide()
//   	$('.T').hide()
//   	$('.M').hide()
//   	$('.z').hide()
//   	$('.cb').hide()
//   	$('.mb').hide()
//   	$('.f').hide()
//   	$('.sp').hide()
//   	$('.bp').hide()
//   	$('.om').hide()
//   },

//   showImage13: function (e) {
//   	$('.z').show()
//   	$('.t').hide()
//   	$('.m').hide()
//   	$('.r').hide()
//   	$('.s').hide()
//   	$('.w').hide()
//   	$('.c').hide()
//   	$('.g').hide()
//   	$('.b').hide()
//   	$('.o').hide()
//   	$('.T').hide()
//   	$('.M').hide()
//   	$('.ms').hide()
//   	$('.cb').hide()
//   	$('.mb').hide()
//   	$('.f').hide()
//   	$('.sp').hide()
//   	$('.bp').hide()
//   	$('.om').hide()
//   },

//   showImage14: function (e) {
//   	$('.cb').show()
//   	$('.t').hide()
//   	$('.m').hide()
//   	$('.r').hide()
//   	$('.s').hide()
//   	$('.w').hide()
//   	$('.c').hide()
//   	$('.g').hide()
//   	$('.b').hide()
//   	$('.o').hide()
//   	$('.T').hide()
//   	$('.M').hide()
//   	$('.ms').hide()
//   	$('.z').hide()
//   	$('.mb').hide()
//   	$('.f').hide()
//   	$('.sp').hide()
//   	$('.bp').hide()
//   	$('.om').hide()
//   },

//   showImage15: function (e) {
//   	$('.mb').show()
//   	$('.t').hide()
//   	$('.m').hide()
//   	$('.r').hide()
//   	$('.s').hide()
//   	$('.w').hide()
//   	$('.c').hide()
//   	$('.g').hide()
//   	$('.b').hide()
//   	$('.o').hide()
//   	$('.T').hide()
//   	$('.M').hide()
//   	$('.ms').hide()
//   	$('.z').hide()
//   	$('.cb').hide()
//   	$('.f').hide()
//   	$('.sp').hide()
//   	$('.bp').hide()
//   	$('.om').hide()
//   },

//   showImage16: function (e) {
//   	$('.f').show()
//   	$('.t').hide()
//   	$('.m').hide()
//   	$('.r').hide()
//   	$('.s').hide()
//   	$('.w').hide()
//   	$('.c').hide()
//   	$('.g').hide()
//   	$('.b').hide()
//   	$('.o').hide()
//   	$('.T').hide()
//   	$('.M').hide()
//   	$('.ms').hide()
//   	$('.z').hide()
//   	$('.cb').hide()
//   	$('.mb').hide()
//   	$('.sp').hide()
//   	$('.bp').hide()
//   	$('.om').hide()
//   },

//   showImage17: function (e) {
//   	$('.sp').show()
//   	$('.t').hide()
//   	$('.m').hide()
//   	$('.r').hide()
//   	$('.s').hide()
//   	$('.w').hide()
//   	$('.c').hide()
//   	$('.g').hide()
//   	$('.b').hide()
//   	$('.o').hide()
//   	$('.T').hide()
//   	$('.M').hide()
//   	$('.ms').hide()
//   	$('.z').hide()
//   	$('.cb').hide()
//   	$('.mb').hide()
//   	$('.f').hide()
//   	$('.bp').hide()
//   	$('.om').hide()
//   },

//   showImage18: function (e) {
//   	$('.bp').show()
//   	$('.t').hide()
//   	$('.m').hide()
//   	$('.r').hide()
//   	$('.s').hide()
//   	$('.w').hide()
//   	$('.c').hide()
//   	$('.g').hide()
//   	$('.b').hide()
//   	$('.o').hide()
//   	$('.T').hide()
//   	$('.M').hide()
//   	$('.ms').hide()
//   	$('.z').hide()
//   	$('.cb').hide()
//   	$('.mb').hide()
//   	$('.f').hide()
//   	$('.sp').hide()
//   	$('.om').hide()
//   },

//   showImage19: function (e) {
//   	$('.om').show()
//   	$('.t').hide()
//   	$('.m').hide()
//   	$('.r').hide()
//   	$('.s').hide()
//   	$('.w').hide()
//   	$('.c').hide()
//   	$('.g').hide()
//   	$('.b').hide()
//   	$('.o').hide()
//   	$('.T').hide()
//   	$('.M').hide()
//   	$('.ms').hide()
//   	$('.z').hide()
//   	$('.cb').hide()
//   	$('.mb').hide()
//   	$('.f').hide()
//   	$('.sp').hide()
//   	$('.bp').hide()
//   },

//   unselect: function (e) {
//     $('.tongs').removeClass('active')
//   },

//   reselect: function (e) {
//     $('.tongs').addClass('active')
//     $('.t').show()
//     $('.om').hide()
//     $('.m').hide()
//     $('.r').hide()
//     $('.s').hide()
//     $('.w').hide()
//     $('.c').hide()
//     $('.g').hide()
//     $('.b').hide()
//     $('.o').hide()
//     $('.T').hide()
//     $('.M').hide()
//     $('.ms').hide()
//     $('.z').hide()
//     $('.cb').hide()
//     $('.mb').hide()
//     $('.f').hide()
//     $('.sp').hide()
//     $('.bp').hide()
//   }
// });

// module.exports = Cookware;
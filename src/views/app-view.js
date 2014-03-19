// ----------------------------------------------------------------------------
// imports
//
var Backbone = require('backbone')
var $ = require('jquery')
Backbone.$ = $
var TodoView = require('../views/todo-view')


// ----------------------------------------------------------------------------
// AppView
var AppView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'add', this.addOne)
  },

  addOne: function(todo) {
    var view = new TodoView({model: todo})
    this.$('#todo-list').append(view.render().el)
  },
})


// ----------------------------------------------------------------------------
// exports
//
module.exports = AppView

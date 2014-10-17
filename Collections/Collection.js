//Backbone Collection
/*global Backbone,Model*/
var TodoApp = TodoApp || {};
TodoApp.Collection = Backbone.Collection.extend({
    model: TodoApp.Model
});
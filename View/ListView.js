//Backbone View	- Sub View
/*jslint nomen:true*/
/*global Backbone,$,_*/
var ListView = Backbone.View.extend({
    el: '#listHolder',

    events: {
        'click button': 'deleteItem'
    },

    deleteItem: function (event) {
        "use strict";
        $(event.currentTarget).closest("li").css("text-decoration", "line-through");
        $(event.currentTarget).attr("disabled", "true");
        
    },

    render: function () {
        "use strict";
        var html = _.template("<li><%-taskName%> - <button>done</button></li>")(this.model.toJSON());
        this.$el.append(html);
    }

});
//Backbone Collection
/*jslint nomen:true*/
/*global Backbone,Model,$,ListView,_,Collection,TodoApp*/

var TodoApp = TodoApp || {};
   
TodoApp.AppView = Backbone.View.extend({
    el: '#appHolder',

    initialize: function () {
        "use strict";
        this.listCollection = new TodoApp.Collection();
    },

    events: {
        'click #btnAdd': 'addListItem',
        'keydown #taskName': 'updateOnEnter'
    },

    addListItem: function () {
        "use strict";
        var $taskName = $('#taskName'),
            model = null,
            listView = null;

        if (_.isEmpty($taskName.val())) {
            return;
        }
        model = new TodoApp.Model();
        model.set("taskName", $taskName.val());

        this.listCollection.add(model);

        listView = new TodoApp.ListView({
            model: model
        });

        $('#listHolder').append(listView.render().el);

        $taskName.val("").focus();
    },

    updateOnEnter: function (event) {
        "use strict";
        if (event.keyCode === 13 && !_.isEmpty($(event.target).val())) {
            $('#btnAdd').trigger("click");
        }

    },

    render: function () {
        "use strict";
        this.$el.append($('#mytemplate').html());
    }

});


(function() {

var Result = Backbone.Model.extend({

  defaults : {
    user : {
      userId : null
    },
    score : {
      count : 0
    },
    date : null
  }
});

var ResultView = Backbone.View.extend({
  tagName : 'li',
  template : _.template($('#result-template').html()),
  render : function() {
        var template = this.template(this.model.toJSON());
        this.$el.html(template);
        return this;
  }
});


/*
var result = new Result();
var resultView = new ResultView({ model : result });


$('body').append(resultView.render().el);
*/

var Results = Backbone.Collection.extend({
  model : Result  
});

/*
** TODO “®“IŽæ“¾‚³‚¹‚é‚±‚Æ
*/
var results = new Results([
  { user  : { userId : "user1" }
  , score : { count : 900 }
  , date  : "2013/9/23"
  },
  { user  : { userId : "user2" }
  , score : { count : 800 }
  , date  : "2013/9/22"
  },  
  { user  : { userId : "user3" }
  , score : { count : 800 }
  , date  : "2013/9/21"
  }
]);

var ResultsView = Backbone.View.extend({
  tagName : 'ul',
  render : function() {
    this.collection.each(
      function(result) {
        var resultView = new ResultView({ model : result });
        this.$el.append(resultView.render().el);
      },
      this
    );
    return this;
  }
});

var resultsView = new ResultsView({ collection : results });
$('#results').html(resultsView.render().el);

})();
Template.newblogpost.events({
  'submit form': function (e) {
    e.preventDefault();

    // Make sure I remember to type something...
    if ($(e.target).find('[name=title]').val() === "" || $(e.target).find('[name=content]').val() === "") {
      // TO DO: implement much better error handling
      return alert("Please enter a title and some post content");
    }  

    var date = Meteor.appFunctions.prettifyDate(new Date());

    var blogPost = {
      title: $(e.target).find('[name=title]').val(),
      content: $(e.target).find('[name=content]').val(),
      author: Meteor.userId(),
      created: new Date(),
      prettyDate: date,
      lastEdited: null
    };

    Meteor.call('insertBlogPost', blogPost, function (error, result) {
      if (error) {
        // TO DO: implement much better error handling
        alert("ERROR");
      }
    });

    Router.go('bloglist');
  }
});
// Template.postSubmit.events({
//   'submit form': function (e) {
//     e.preventDefault();

//     var post = {
//       url: $(e.target).find('[name=url]').val(),
//       title: $(e.target).find('[name=title]').val()
//     };

//     var errors = validatePost(post);
//     if (errors.title || errors.url)
//       return Session.set('postSubmitErrors', errors);

//     Meteor.call('postInsert', post, function(error, result) {
//       if (error)
//         Errors.throw(error.reason);

//       if ( result.postExists )
//         Errors.throw('This link has already been posted.');

//       Router.go('postPage', {_id: result._id});
//     });
//   }
// });

Template.newBlogPost.events({
  'submit form': function (e) {
    e.preventDefault();

    var blogPost = {
      title: $(e.target).find('[name=title]').val(),
      content: $(e.target).find('[name=content]').val(),
      author: Meteor.userId(),
      created: new Date()
    };

    Meteor.call('insertBlogPost', blogPost, function (error, result) {
      if (error) {
        alert("ERROR");
      }
    });

    Router.go('blog');
  }
});
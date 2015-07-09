Template.admin.helpers({
  isAdmin: function () {
    return Meteor.userId() === "PetzzszGt2QW4FiAz";
  }
});

Template.admin.events({
  'click #blog': function () {
    // BlogPosts.insert({
    //   author: Meteor.userId(),
    //   created: new Date(),
    //   title: "Test Title",
    //   content: "Lorem ipsum dolor sit amet"
    // });
    Router.go('newBlogPost');
  }
});

/* Template.postSubmit.events({
  'submit form': function (e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    var errors = validatePost(post);
    if (errors.title || errors.url)
      return Session.set('postSubmitErrors', errors);

    Meteor.call('postInsert', post, function(error, result) {
      if (error)
        Errors.throw(error.reason);

      if ( result.postExists )
        Errors.throw('This link has already been posted.');

      Router.go('postPage', {_id: result._id});
    });
  }
}); */
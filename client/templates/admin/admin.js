Template.admin.helpers({
  isAdmin: function () {
    return Meteor.userId() === "PetzzszGt2QW4FiAz";
  }
});

Template.admin.events({
  'click #blog': function () {
    Router.go('newblogpost');
  }
});
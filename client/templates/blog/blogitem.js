Template.blogitem.helpers({
  prettyDate: function (date) {
    return Meteor.appFunctions.prettifyDate(date);
  }
});
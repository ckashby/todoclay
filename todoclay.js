if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: [
      { text: "Walk dog" },
      { text: "Pickup new toaster" },
      { text: "Flowers for Cindy" }
    ]
  });
}


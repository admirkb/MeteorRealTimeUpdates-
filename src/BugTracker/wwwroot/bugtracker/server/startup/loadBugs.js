//chatStream = new Meteor.Stream('chat');

Meteor.startup(function () {
  if (Bugs.find().count() === 0) {
    var bugs = [
      {
        'problem': 'Bug 1',
        'description': 'No Admir Logo',
          'dateCreated': new Date()
      },
      {
          'problem': 'Bug 2',
          'description': 'Heading not centered',
          'dateCreated': new Date()
      },

    ];

    for (var i = 0; i < bugs.length; i++) {
      Bugs.insert(bugs[i]);
    }
  }
});

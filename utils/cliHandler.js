'use strict';

const meow = require('meow');

module.exports = meow(
  `
    Usage
      $ gwo [options] <command>

    Commands
      login  Asks for your credentials and logs you in your GH account

    Options
      -h, --help Displays help
  `,
);

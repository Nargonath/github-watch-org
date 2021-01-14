'use strict';

const meow = require('meow');

module.exports = meow(
  `
    Usage
      $ gwo [options] <command>

    Options
      -h, --help Displays help
  `,
);

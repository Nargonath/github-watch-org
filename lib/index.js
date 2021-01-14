'use strict';

const [, , command, ...restArgs] = process.argv;

switch (command) {
  default:
    console.error('Unknown command');
    process.exitCode = 2;
}

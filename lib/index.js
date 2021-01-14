'use strict';

const [, , command, ...restArgs] = process.argv;

switch (command) {
  case 'login':
    require(`./${command}`)(restArgs);
    break;

  default:
    console.error('Unknown command');
    process.exitCode = 2;
}

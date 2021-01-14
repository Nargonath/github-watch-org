#!/usr/bin/env node

'use strict';

const { spawnSync } = require('child_process');

// require it here to handle --help before checking prerequisites
require('../utils/cliHandler');

const [, , ...restArgs] = process.argv;

const commandPath = require.resolve('../lib');

const result = spawnSync('node', [commandPath, ...restArgs], {
  cwd: process.cwd(),
  stdio: 'inherit',
});

// @see: https://nodejs.org/api/process.html#process_process_exit_code
process.exitCode = result.status;

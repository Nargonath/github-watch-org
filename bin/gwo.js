#!/usr/bin/env node

'use strict';

const { spawnSync } = require('child_process');

const [, , ...restArgs] = process.argv;

const commandPath = require.resolve('../lib');

const result = spawnSync('node', [commandPath, ...restArgs], {
  cwd: process.cwd(),
  stdio: 'inherit',
});

process.exit(result.status);

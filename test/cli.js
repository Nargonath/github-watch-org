'use strict';

const Lab = require('@hapi/lab');
const nixt = require('nixt');

const { it, describe } = (exports.lab = Lab.script());

const baseNixt = nixt().exec('npm link');

describe('gwo', () => {
  it('is available in shell', () => {
    baseNixt.clone().code(0).run('gwo').end();
  });

  it('throws if not authenticated');

  it('accepts GITHUB_TOKEN as authentication');

  it('allows authentication through the CLI');
});

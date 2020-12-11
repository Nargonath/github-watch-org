'use strict';

const Lab = require('@hapi/lab');
const nixt = require('nixt');

const { it, describe } = (exports.lab = Lab.script());

describe('gwo', () => {
  it('is available in shell', () => {
    nixt().code(0).run('gwo').end();
  });

  it('throws if not authenticated');

  it('accepts GITHUB_TOKEN as authentication');

  it('allows authentication through the CLI');
});

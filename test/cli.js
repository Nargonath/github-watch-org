'use strict';

const Lab = require('@hapi/lab');
const nixt = require('nixt');

const { it, describe } = (exports.lab = Lab.script());

describe('cli', () => {
  it('throws if not authenticated');

  it('accepts GITHUB_TOKEN as authentication');

  it('allows authentication through the CLI');
});

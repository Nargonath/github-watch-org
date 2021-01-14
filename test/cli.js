'use strict';

const Lab = require('@hapi/lab');
const nixt = require('nixt');

const { endNixtCalls } = require('./utils');

const { it, describe } = (exports.lab = Lab.script());

const baseNixt = nixt().exec('npm link');

describe('gwo', () => {
  it('is an executable', async () => {
    await endNixtCalls(baseNixt.clone().code(0).run('gwo --help'));
  });

  it('throws if not authenticated');

  it('accepts GITHUB_TOKEN as authentication');

  it('allows authentication through the CLI');
});

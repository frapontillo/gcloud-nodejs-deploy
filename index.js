'use strict';

const path = require('path');
const spawn = require('execa').spawn;

const readVersion = () => {
  const pkg = require(path.join(process.cwd(), 'package.json'));
  return pkg.version;
};

const normalizeVersion = (version) => {
  if (version.length > 63) {
    throw new Error('Must not exceed 63 characters.');
  }
  version = version.replace(/\./g, '-');
  if (/^([A-Za-z]|[0-9])(([A-Za-z]|[0-9]|\-)*([A-Za-z]|[0-9])){0,1}$/g.test(version) === false) {
    throw new Error('May only contain letters, digits, and hyphens. Must begin and end with a letter or digit.');
  }
  return version.toLowerCase();
};

const launchDeploy = () => {
  const version = normalizeVersion(readVersion());
  return spawn('gcloud', 
    ['preview', 'app', 'deploy', '--version', version], 
    { stdio: 'inherit' });
};


module.exports = {
  readVersion: readVersion,
  normalizeVersion: normalizeVersion,
  launchDeploy: launchDeploy
};

'use strict';

import test from 'ava';
import gcloud from '.';

test('normalizeVersion should normalize the semver', t => {
  const version = gcloud.normalizeVersion('1.3.37');
  t.is(version, '1-3-37');
});

test('normalizeVersion should throw error for too many characters', t => {
  t.throws(() => gcloud.normalizeVersion(
    'CHA-LA HEAD-CHA-LA / Nani ga okite mo kibun wa heno-heno kappa / CHA-LA HEAD-CHA-LA / ' +
    'Mune ga pachi-pachi suru hodo / Sawagu Genki-Dama... Sparking!'), /characters/g);
});

test('normalizeVersion should accept a single digit', t => {
  t.ok(gcloud.normalizeVersion('1'));
});

test('normalizeVersion should accept a single character', t => {
  t.ok(gcloud.normalizeVersion('a'));
});

test('normalizeVersion should not accept empty strings', t => {
  t.throws(() => gcloud.normalizeVersion(''));
});

test('normalizeVersion should not accept strings not starting AND/OR ending w/ char or digit', t => {
  t.throws(() => gcloud.normalizeVersion('-wontwork'));
  t.throws(() => gcloud.normalizeVersion('wontwork-'));
  t.throws(() => gcloud.normalizeVersion('^wontwork§'));
});

test('normalizeVersion should normalize UPPERCASE to lowercase', t => {
  t.is(gcloud.normalizeVersion('THIS'), 'this');
});

test('normalizeVersion should accept hyphens between digits and chars', t => {
  t.ok(gcloud.normalizeVersion('1-something-else-2'));
});

test('normalizeVersion should not accept strings starting AND/OR ending w/ hyphen', t => {
  t.throws(() => gcloud.normalizeVersion('-yo'));
  t.throws(() => gcloud.normalizeVersion('yo-'));
  t.throws(() => gcloud.normalizeVersion('-yo-'));
});

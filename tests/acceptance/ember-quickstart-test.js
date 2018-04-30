import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | ember quickstart', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /ember-quickstart', async function(assert) {
    await visit('/ember-quickstart');

    assert.equal(currentURL(), '/ember-quickstart');
  });
});

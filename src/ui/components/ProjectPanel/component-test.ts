import hbs from '@glimmer/inline-precompile';
import { render, setupRenderingTest } from '@glimmer/test-helpers';

const { module, test } = QUnit;

module('Component: ProjectPanel', function(hooks) {
  setupRenderingTest(hooks);

  // https://github.com/glimmerjs/glimmer.js/issues/164
  test('it renders', async function(assert) {
    this.foo = {id: 0, name: 'foobar'};
    await render(hbs`<ProjectPanel @projectDesc={{this.foo}} />`);
    assert.equal(this.containerElement.innerText, 'project panel: foobar');
  });
});

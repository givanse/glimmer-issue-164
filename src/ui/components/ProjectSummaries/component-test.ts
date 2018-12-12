import hbs from '@glimmer/inline-precompile';
import { setupRenderingTest } from '@glimmer/test-helpers';

const { module, test, skip } = QUnit;

module('Component: ProjectSummaries', function(hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function(assert) {
    await this.render(hbs`<ProjectSummaries />`);
    assert.ok(this.containerElement.querySelector('div'));
  });
});

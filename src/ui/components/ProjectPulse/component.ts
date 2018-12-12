import Component, { tracked } from '@glimmer/component';

interface ProjectDesc {
  id: number;
  name: string;
}

export default class ProjectPulse extends Component {

  @tracked private projectNames: ProjectDesc[];

}

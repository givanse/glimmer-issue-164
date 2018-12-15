import Component, { tracked } from '@glimmer/component';

interface ProjectDesc {
  id: number;
  name: string;
}

export default class ProjectPulse extends Component {

  @tracked protected projectDesc: ProjectDesc;

  constructor(options) {
    super(options);

    this.projectDesc = {id: 0, name: 'some name'};
  }

}

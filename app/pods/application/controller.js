import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked items = [
    {
      isDone: true,
      label: 'Zjeść śniadanie',
    },
    {
      isDone: true,
      label: 'Ogarnąć się',
    },
    {
      isDone: false,
      label: 'Pouczyć się Embera',
    },
    {
      isDone: false,
      label: 'Powtórzyć CSS',
    },
  ];
  @action
  onInputValue(event) {
    this.newTaskValue = event.target.value;
  }

  @action
  addNewTask(event) {
    event.preventDefault();
    this.items = [
      ...this.items,
      {
        isDone: false,
        label: this.newTaskValue,
      },
    ];
  }
}

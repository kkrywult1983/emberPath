import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  items = [
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
}

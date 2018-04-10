import {Router, Redirect} from 'aurelia-router';

export class Inventory {
  static inject = [Router];

  heading = 'Welcome to the Inventory page';
  search = '';

  constructor(router) {
    this.router = router;
  }

  performSearch() {
    if (this.search) {
      this.router.navigate(`#/inventory/${this.search}`);
    }
  }
}
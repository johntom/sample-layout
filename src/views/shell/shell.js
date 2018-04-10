import 'jquery';
import 'bootstrap';
import 'kendo.all.min';
import {ApplicationService} from '../../services/application-service';
import {AuthorizeStep} from '../../services/authorize-step';

export class Shell {
  static inject = [ApplicationService];

  constructor(appService) {
    this.appService = appService;
  }

  configureRouter(config, router) {
    config.title = 'Sample Layout';
    config.addPipelineStep('authorize', AuthorizeStep);
    config.map([
      { route: ['', 'home'], name: 'home',      moduleId: '../home/home',      nav: true, title: 'Home' },
      { route: 'inventory/:id', name: 'inventory-search-results',      moduleId: '../inventory/search-results', title: 'Search Results' },
      { route: 'inventory/data/:id', name: 'inventory-data-form',      moduleId: '../inventory/data-form', title: 'Data Form' },
      { route: 'inventory', name: 'inventory',      moduleId: '../inventory/inventory',      nav: true, title: 'Inventory' },
    ]);

    this.router = router;
  }

  selectTab(tab) {
    this.appService.tabs.forEach(t => t.isSelected = false);
    tab.isSelected = true;
    return true;
  }
  closeTab(tab, index) {
    let wasSelected = tab.isSelected;
    tab.isSelected = false;
    this.appService.tabs.splice(index, 1);
    if (wasSelected && this.appService.tabs.length > 0) {
      let newIndex = (index > 0) ? index - 1 : 0;
      let newTab = this.appService.tabs[newIndex];
      newTab.isSelected = true;
      this.router.navigate(newTab.href);
    }
  }
  
}

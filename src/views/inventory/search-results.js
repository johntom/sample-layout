
export class SearchResults {
  heading = 'Search Results HEADER...';
  footer = 'Search Results FOOTER...';
  recordId = '';

  activate(params, routeConfig) {
    if (params.id) {
      this.recordId = params.id;
    }
  }
}
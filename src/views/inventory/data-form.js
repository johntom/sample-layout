
export class DataForm {
  heading = 'DataForm HEADER...';  
  footer = 'DataForm FOOTER...';
  recordId = '';

  activate(params, routeConfig) {
    if (params.id) {
      this.recordId = params.id;
    }
  }

}
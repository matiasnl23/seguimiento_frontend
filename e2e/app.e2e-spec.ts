import { SeguimientoPage } from './app.po';

describe('seguimiento App', function() {
  let page: SeguimientoPage;

  beforeEach(() => {
    page = new SeguimientoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

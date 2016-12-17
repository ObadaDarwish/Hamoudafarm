import { HamoudaFarmPage } from './app.po';

describe('hamouda-farm App', function() {
  let page: HamoudaFarmPage;

  beforeEach(() => {
    page = new HamoudaFarmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

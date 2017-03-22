import { AngularMysqlFrontendPage } from './app.po';

describe('angular-mysql-frontend App', function() {
  let page: AngularMysqlFrontendPage;

  beforeEach(() => {
    page = new AngularMysqlFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

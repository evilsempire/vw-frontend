import { WarrantyKeysAndContracts } from './app.po';

describe('WarrantyKeysAndContracts App', () => {
  let page: WarrantyKeysAndContracts;

  beforeEach(() => {
    page = new WarrantyKeysAndContracts();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

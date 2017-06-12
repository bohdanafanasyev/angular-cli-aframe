import { AframePage } from './app.po';

describe('aframe App', () => {
  let page: AframePage;

  beforeEach(() => {
    page = new AframePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

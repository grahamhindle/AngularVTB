import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for mygec', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be mygec', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('mygec');
    })
  });

  it('navbar-brand should be gec@0.0.1',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('gec@0.0.1');
  });

  
    it('Description component should be loadable',() => {
      page.navigateTo('/Description');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Description');
    });

    it('Description table should have 3 columns',() => {
      page.navigateTo('/Description');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });

  
    it('TradeDescription component should be loadable',() => {
      page.navigateTo('/TradeDescription');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('TradeDescription');
    });

    it('TradeDescription table should have 3 columns',() => {
      page.navigateTo('/TradeDescription');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });

  
    it('OperationFlow component should be loadable',() => {
      page.navigateTo('/OperationFlow');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('OperationFlow');
    });

    it('OperationFlow table should have 3 columns',() => {
      page.navigateTo('/OperationFlow');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });

  
    it('ClientDescription component should be loadable',() => {
      page.navigateTo('/ClientDescription');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('ClientDescription');
    });

    it('ClientDescription table should have 3 columns',() => {
      page.navigateTo('/ClientDescription');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });

  
    it('ProductType component should be loadable',() => {
      page.navigateTo('/ProductType');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('ProductType');
    });

    it('ProductType table should have 5 columns',() => {
      page.navigateTo('/ProductType');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });

  
    it('GecDoc component should be loadable',() => {
      page.navigateTo('/GecDoc');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('GecDoc');
    });

    it('GecDoc table should have 14 columns',() => {
      page.navigateTo('/GecDoc');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(14); // Addition of 1 for 'Action' column
      });
    });

  

});

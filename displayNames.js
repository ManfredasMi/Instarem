browser.waitForAngularEnabled(false);

describe('Start', function() {

  it('Printing bank names', function() {
    browser.get('https://www.theswiftcodes.com/malaysia/');
    var allTableContent = $$('.swift tr');
    allTableContent.each(function(row) {
      var rowElems = row.$$('td');
      rowElems.getText().then(function (text) {
        console.log("Bank name " + text[1] + " & swift code " + text[4]);
      });
    });
  });
});

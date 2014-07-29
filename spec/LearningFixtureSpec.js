describe("Learning About Fixtures", function() {

  it("Offers three crucuial functions", function() {
    expect(readFixtures).toBeDefined();
    expect(setFixtures).toBeDefined();
    expect(loadFixtures).toBeDefined();
  });

  it('Can load fixtures from a file', function() {
    loadFixtures('fragment.html');
    expect($('.fragment')).toExist();
  });

  it('Can read fixtures without appending to DOM', function() {
    var fixture = readFixtures('fragment.html');
    expect($('.fragment')).not.toExist();
    expect(fixture).toMatch(/fragment/);
    expect(fixture).toContain('li');
    expect($(fixture).find('li')).toHaveText('data 1');
  });

  it("Can receive a fixture as a parameter", function() {
    setFixtures('<div class="sandbox">hello there</div>');
    expect($('.sandbox')).toExist();
  });

  it("Offers a sandbox function for convenience", function() {
    expect(sandbox).toBeDefined();
    var sb = sandbox();
    expect(sb.attr('id')).toEqual('sandbox');
    setFixtures(sb);
    expect($('#sandbox')).toExist();
  });

  it('Offers sandbox customization', function() {
    setFixtures(sandbox({'class': 'some-class'}));
    expect($('.some-class')).toExist();
    expect($('#sandbox')).toHaveClass('some-class');
  });

});
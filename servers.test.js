describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server when submitServerInfo input is blank', function(){
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update server table on updateServerTable()', function(){
    submitServerInfo();
    updateServerTable();

    let tableList = document.querySelectorAll('#serverTable tbody tr td')
    expect(tableList[0].innerText).toEqual('Alice');
    expect(tableList[1].innerText).toEqual('$0.00');
    expect(tableList[2].innerText).toEqual('X');
  });

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});

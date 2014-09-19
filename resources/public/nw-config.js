var nw = require('nw.gui');
win = nw.Window.get();
var nativeMenuBar = new nw.Menu({ type: "menubar" });
nativeMenuBar.createMacBuiltin("TestDrive", {
  hideEdit: false,
  hideWindow: false
});
win.menu = nativeMenuBar;

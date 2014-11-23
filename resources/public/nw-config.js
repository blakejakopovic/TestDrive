// Setup application menu for OS X
if (process.platform == "darwin") {
	var nw = require('nw.gui');
	win = nw.Window.get();
	var nativeMenuBar = new nw.Menu({ type: "menubar" });
	nativeMenuBar.createMacBuiltin("TestDrive", {
	  hideEdit: true,
	  hideWindow: false
	});
	win.menu = nativeMenuBar;
}
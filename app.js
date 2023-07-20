const {
    app,
    BrowserWindow
  } = require('electron')
  
  let appWindow
  
  function createWindow() {
    appWindow = new BrowserWindow({
      width: 1000,
      height: 800
    })

    appWindow.loadFile('dist/electron-app-tutorial/index.html');

    appWindow.on('closed', function () {
      appWindow = null
    })
  }

  app.whenReady().then(() => {
    createWindow()
  })
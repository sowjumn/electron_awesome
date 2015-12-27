const electron = require('electron');


const app = electron.app; // module to control application life
const BrowserWindow = electron.BrowserWindow; // module to create native browser window

// Reports crashes to our server.

// Keep a global reference of the window object, if you don't, the window will be closed automatically when the Javascript object is garbage collected
var mainWindow = null;

// Quit when all windows are closed
app.on('window-all-closed', function() {
  // On Os X it is common for applications and their menu bars to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('http://localhost:8080');

  // Open the DevTools
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows in an array
    // if your app supports multi windows, this is the time when you should delete the 
    // corresponding element
    mainWindow = null;
  });
});

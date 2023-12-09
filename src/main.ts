
import {app, BrowserWindow, contextBridge} from "electron"

const isDev = process.env.NODE_ENV !== 'production'
const isMac = process.platform === 'darwin'

const getUserData = () => {
  return {
    username: 'john_doe',
    email: 'john@example.com',
  };
};


function createMainWindow(): void {
    const mainWindow = new BrowserWindow({
        title: 'Reports Automation',
        width: 1000,
        height: 800,
        frame: false,
        webPreferences: {
          contextIsolation: true,
          nodeIntegration: true,
          preload: __dirname + "/preload.js"
        }
    })
    // Open devtools for dev ENV
    if (isDev) {
        mainWindow.webContents.openDevTools()
    }
    mainWindow.loadFile("./renderer/index.html");
}

app.whenReady().then(() => {
    createMainWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow()
      }
    })
  })
  
  app.on('window-all-closed', () => {
    if (!isMac) {
      app.quit()
    }
  })

// Expose the getUserData function to the renderer process
contextBridge.exposeInMainWorld('api', {
  getUserData,
});
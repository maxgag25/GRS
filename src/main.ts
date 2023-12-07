
import {app, BrowserWindow} from "electron"

const isDev = process.env.NODE_ENV !== 'production'
const isMac = process.platform === 'darwin'

function createMainWindow(): void {
    const mainWindow = new BrowserWindow({
        title: 'Reports Automation',
        width: 1000,
        height: 800,
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
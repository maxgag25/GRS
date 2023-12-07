"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';
function createMainWindow() {
    const mainWindow = new electron_1.BrowserWindow({
        title: 'Reports Automation',
        width: 1000,
        height: 800,
    });
    // Open devtools for dev ENV
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }
    mainWindow.loadFile("./renderer/index.html");
}
electron_1.app.whenReady().then(() => {
    createMainWindow();
    electron_1.app.on('activate', () => {
        if (electron_1.BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    });
});
electron_1.app.on('window-all-closed', () => {
    if (!isMac) {
        electron_1.app.quit();
    }
});
//# sourceMappingURL=main.js.map
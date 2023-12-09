const { contextBridge } = require('electron')

const API = {
    test: 'test'
}

contextBridge.exposeInMainWorld("api", API)
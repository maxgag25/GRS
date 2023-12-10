const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld("api", {
    test: 'contextBridge : toto michubichi la'
});

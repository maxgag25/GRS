"use strict";
const { contextBridge } = require('electron');
// contextBridge.exposeInMainWorld("api", {
//     test: 'test'
// })
contextBridge.exposeInMainWorld("api", {
    test: 'contextBridge : toto michubichi la'
});
//# sourceMappingURL=preload.js.map
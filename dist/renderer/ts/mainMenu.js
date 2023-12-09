"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainMenu = void 0;
const electron_1 = require("electron");
const isMac = process.platform === 'darwin';
const template = [
    ...(isMac ? [{
            label: electron_1.app.name,
            submenu: [
                {
                    label: 'Quitter',
                    click: () => electron_1.app.quit(),
                    accelerator: 'CmdOrCtrl+W',
                },
            ],
        }] : [
        {
            label: "Fichier",
            submenu: [
                {
                    label: 'Quitter',
                    click: () => electron_1.app.quit(),
                    accelerator: 'CmdOrCtrl+W',
                },
            ],
        }
    ]),
];
exports.mainMenu = electron_1.Menu.buildFromTemplate(template);
//# sourceMappingURL=mainMenu.js.map
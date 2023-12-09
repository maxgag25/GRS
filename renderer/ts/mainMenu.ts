import {app, Menu} from "electron"

const isMac = process.platform === 'darwin'
const template = [
    ...(isMac ? [{
        label: app.name,
        submenu: [
          {
            label: 'Quitter',
            click: () => app.quit(),
            accelerator: 'CmdOrCtrl+W',
          },
        ],
    }] : [
        {
            label: "Fichier",
            submenu: [
                {
                label: 'Quitter',
                click: () => app.quit(),
                accelerator: 'CmdOrCtrl+W',
                },
            ],
            }
    ]),
  ]

export const mainMenu = Menu.buildFromTemplate(template)
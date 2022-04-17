const { app, BrowserWindow, Menu } = require('electron') 
// const path = require('path') 
function createWindow () { 
  const win = new BrowserWindow({ 
    width: 800, 
    height: 800
    // webPreferences: { 
    //   nodeIntegration: true,
    //   contextIsolation : false
    // } 
  }) 
  win.loadURL("http://localhost:3000");
  
  const template = [
    {
      label: "MJ's app",
      submenu: [] 
    },
    {
      label: "⚠",
      submenu: [
        {
          label: "백승렬의 머리",
          click: () => {
            win.webContents.executeJavaScript(`
              window.location.reload();
            `);
          }
        }
      ]
    },
    {
      label: "Reset",
      submenu: [
        {
          label: "Reset ToDo List",
          click: () => {
            win.webContents.executeJavaScript(`
              localStorage.removeItem('data')
              window.location.reload();
            `);
          }
        },
        {
          label: "Reset Green Effort",
          click: () => {
            win.webContents.executeJavaScript(`
              localStorage.removeItem('green')
              window.location.reload();
            `);
          }
        }
      ]
    }
  ];

  const customMenu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(customMenu);
} 
app.whenReady().then(() => { 
  createWindow() 
}) 
// app.on('window-all-closed', function () { 
//   if (process.platform !== 'darwin') app.quit() 
// })
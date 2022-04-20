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
  win.loadURL("https://mxx-kor.github.io/react-practices/");
  
  const template = [
    {
      label: "백승렬의 머리",
      submenu: [
        {
          label: '하스 스톤',
          click: () => {
            win.webContents.executeJavaScript(`
              window.open("about:blank").location.href = 'https://ww.namu.la/s/03601ed854dc1a83803305f8d399377953f05075346bcf4b3a3b9acb560d8cb03dc5ab26dde7e5128b7d74ddd1f59aeaaa99257197eeea49be8a26040e35f2c99110db9b0be4dab2b5b37d638d877abdab2d353a8cc2310a37a4aa7c7c4e5335 '
            `)
          }
        }
      ] 
    },
    {
      label: "Reset ⚠",
      submenu: [
        {
          label: "Reload",
          click: () => {
            win.webContents.executeJavaScript(`
              window.location.href = "https://mxx-kor.github.io/react-practices/";
            `);
          }
        },
        {
          label: "Reset ToDo List",
          click: () => {
            win.webContents.executeJavaScript(`
              localStorage.removeItem('data')
              window.location.href = "https://mxx-kor.github.io/react-practices/";
            `);
          }
        },
        {
          label: "Reset Green Effort",
          click: () => {
            win.webContents.executeJavaScript(`
              localStorage.removeItem('green')
              window.location.href = "https://mxx-kor.github.io/react-practices/";
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
app.on('window-all-closed', function () { 
  if (process.platform !== 'darwin') app.quit() 
})
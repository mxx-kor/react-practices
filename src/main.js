const { app, BrowserWindow, Menu } = require('electron');
// const path = require('path')
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    // webPreferences: {
    //   nodeIntegration: true,
    //   contextIsolation : false
    // }
  });
  win.loadURL('https://mxx-kor.github.io/react-practices/');

  const template = [
    {
      label: 'Reset ⚠',
      submenu: [
        {
          label: 'Reload',
          click: () => {
            win.webContents.executeJavaScript(`
              window.location.href = "https://mxx-kor.github.io/react-practices/";
            `);
          },
        },
        {
          label: 'Reset ToDo List',
          click: () => {
            win.webContents.executeJavaScript(`
              localStorage.removeItem('data')
              window.location.href = "https://mxx-kor.github.io/react-practices/";
            `);
          },
        },
        {
          label: 'Reset Green Effort',
          click: () => {
            win.webContents.executeJavaScript(`
              localStorage.removeItem('green')
              window.location.href = "https://mxx-kor.github.io/react-practices/";
            `);
          },
        },
      ],
    },
  ];

  const customMenu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(customMenu);
}
app.whenReady().then(() => {
  createWindow();
});
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

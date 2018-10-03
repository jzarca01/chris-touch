const path = require('path');
const { app, BrowserWindow, TouchBar, dialog, shell } = require('electron');
const { TouchBarButton } = TouchBar;

const WESH_ALORS_URL = 'https://www.youtube.com/watch?v=X6MxGJ7qxck?autoplay=1'

const chrisButton = new TouchBarButton({
    icon: path.join(__dirname, '/assets/chris.png'),
    backgroundColor: '#000',
    click: () => dialog.showErrorBox('', 'Pouloulou')
});

const weshAlorsButton = new TouchBarButton({
    label: 'Wesh alors',
    backgroundColor: '#fff',
    click: () => shell.openExternal(WESH_ALORS_URL)
});

const touchBar = new TouchBar([chrisButton, weshAlorsButton]);

let window;

app.once('ready', () => {
    window = new BrowserWindow({
        width: 300,
        height: 200,
        modal: true
    });
    window.loadURL(`file://${path.join(__dirname, '/index.html')}`);
    window.setTouchBar(touchBar);
})

// Quit when all windows are closed and no other one is listening to this.
app.on('window-all-closed', () => {
    app.quit();
});

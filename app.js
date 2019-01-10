const menubar = require('menubar');
const {
  TouchBar,
  globalShortcut
} = require('electron');
const {
  TouchBarLabel,
  TouchBarButton,
  TouchBarSpacer
} = TouchBar;

// Spin button
const mainSite = new TouchBarButton({
  label: '',
  backgroundColor: '',
  click: () => {
		require('electron').shell.openExternal("https://scu.edu");
  },
  icon: './icon.png'
})

const eCampusButton = new TouchBarButton({
  label: 'eCampus',
  backgroundColor: '#800000',
  click: () => {
		require('electron').shell.openExternal("https://ecampus.scu.edu");
  }
})

const caminoButton = new TouchBarButton({
  label: 'Camino',
  backgroundColor: '#800000',
  click: () => {
		require('electron').shell.openExternal("https://camino.instructure.com");
  }
})

const loginButton = new TouchBarButton({
  label: 'Dashboard',
  backgroundColor: '#800000',
  click: () => {
		require('electron').shell.openExternal("https://login.scu.edu");
  }
})

const emailButton = new TouchBarButton({
  label: 'Email',
  backgroundColor: '#800000',
  click: () => {
		require('electron').shell.openExternal("http://gmail.scu.edu/");
  }
})

const courseAvail = new TouchBarButton({
  label: 'CourseAvail',
  backgroundColor: '#800000',
  click: () => {
		require('electron').shell.openExternal("https://www.scu.edu/apps/courseavail/");
  }
})

const touchBar = new TouchBar([,
	mainSite,
  eCampusButton,
  caminoButton,
	loginButton,
  emailButton,
  courseAvail
])

var mainWin = menubar({
  preloadWindow: true,
  icon: './icon/icons/icon_16x16@2x.png',
  tooltip: "Nothing to see here...",
  showDockIcon: false,
  showOnRightClick: false,
  width: 1,
  height: 1
});

mainWin.on('ready', function ready() {
  console.log('Running on v0.1.0');
  mainWin.window.setTouchBar(touchBar)
  globalShortcut.register('Command+G', () => {
    mainWin.showWindow()
  })
})

import './ReactComponents.less'
import React from 'react'
import ReactDOM from 'react-dom'
import Provider from 'Scenes/Provider'
import {mailboxStore, mailboxActions, mailboxDispatch} from 'stores/mailbox'
import {settingsStore, settingsActions} from 'stores/settings'
import {composeStore, composeActions} from 'stores/compose'
import {updaterStore, updaterActions} from 'stores/updater'
import {userStore, userActions} from 'stores/user'
import {extensionStore, extensionActions} from 'stores/extension'
import {crextensionStore, crextensionActions} from 'stores/crextension'
import Debug from 'Debug'
import MouseNavigationDarwin from 'sharedui/Navigators/MouseNavigationDarwin'
import ResourceMonitorResponder from './ResourceMonitorResponder'
import {
  WB_MAILBOXES_WINDOW_JS_LOADED,
  WB_MAILBOXES_WINDOW_REQUEST_GRACEFUL_RELOAD,
  WB_MAILBOXES_WINDOW_ACCEPT_GRACEFUL_RELOAD,
  WB_WINDOW_NAVIGATE_WEBVIEW_BACK,
  WB_WINDOW_NAVIGATE_WEBVIEW_FORWARD
} from 'shared/ipcEvents'
import { ipcRenderer, webFrame } from 'electron'
import DistributionConfig from 'Runtime/DistributionConfig'

// Prevent zooming
webFrame.setZoomLevelLimits(1, 1)

// Prevent drag/drop
document.addEventListener('drop', (evt) => {
  if (evt.target.tagName !== 'INPUT' && evt.target.type !== 'file') {
    evt.preventDefault()
    evt.stopPropagation()
  }
})
document.addEventListener('dragover', (evt) => {
  if (evt.target.tagName !== 'INPUT' && evt.target.type !== 'file') {
    evt.preventDefault()
    evt.stopPropagation()
  }
})

// Navigation
ipcRenderer.on(WB_WINDOW_NAVIGATE_WEBVIEW_BACK, () => mailboxDispatch.navigateBack())
ipcRenderer.on(WB_WINDOW_NAVIGATE_WEBVIEW_FORWARD, () => mailboxDispatch.navigateForward())
if (process.platform === 'darwin') {
  const mouseNavigator = new MouseNavigationDarwin(
    () => mailboxDispatch.navigateBack(),
    () => mailboxDispatch.navigateForward()
  )
  mouseNavigator.register()
  window.addEventListener('beforeunload', () => {
    mouseNavigator.unregister()
  })
}

// Load what we have in the db
userStore.getState()
userActions.load()
userActions.loadExtensions()
mailboxStore.getState()
mailboxActions.load()
settingsStore.getState()
settingsActions.load()
composeStore.getState()
composeActions.load()
updaterStore.getState()
updaterActions.load()
extensionStore.getState()
extensionActions.load()
crextensionStore.getState()
crextensionActions.load()
Debug.load()

// Remove loading
;(() => {
  const loading = document.getElementById('loading')
  loading.parentElement.removeChild(loading)
})()

// Render and prepare for unrender
ReactDOM.render(<Provider />, document.getElementById('ReactComponent-AppSceneRenderNode'))
ipcRenderer.on(WB_MAILBOXES_WINDOW_REQUEST_GRACEFUL_RELOAD, () => {
  window.location.hash = '/'
  ReactDOM.unmountComponentAtNode(document.getElementById('ReactComponent-AppSceneRenderNode'))
  setTimeout(() => {
    ipcRenderer.send(WB_MAILBOXES_WINDOW_ACCEPT_GRACEFUL_RELOAD, {})
  })
})
window.addEventListener('beforeunload', () => {
  window.location.hash = '/'
  ReactDOM.unmountComponentAtNode(document.getElementById('ReactComponent-AppSceneRenderNode'))
})

ipcRenderer.send(WB_MAILBOXES_WINDOW_JS_LOADED, {})

// Resource usage monitoring
const resourceMonitorListener = new ResourceMonitorResponder()
resourceMonitorListener.listen()

// Forced setup wizards
if (DistributionConfig.isSnapInstall && !settingsStore.getState().app.hasSeenSnapSetupMessage) {
  setTimeout(() => {
    window.location.hash = '/snap/setup'
  }, 1000)
}

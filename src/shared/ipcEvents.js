const ISOLATES_ONLY_PFX = 'WB!_ISOLATES_ONLY_' // eslint-disable-line
const MAIN_ONLY_PFX = 'WB!_MAIN_ONLY_'

module.exports = Object.freeze({
  // Auth
  WB_AUTH_GOOGLE: 'WB_AUTH_GOOGLE',
  WB_AUTH_GOOGLE_COMPLETE: 'WB_AUTH_GOOGLE_COMPLETE',
  WB_AUTH_GOOGLE_ERROR: 'WB_AUTH_GOOGLE_ERROR',

  WB_AUTH_MICROSOFT: 'WB_AUTH_MICROSOFT',
  WB_AUTH_MICROSOFT_COMPLETE: 'WB_AUTH_MICROSOFT_COMPLETE',
  WB_AUTH_MICROSOFT_ERROR: 'WB_AUTH_MICROSOFT_ERROR',

  WB_AUTH_SLACK: 'WB_AUTH_SLACK',
  WB_AUTH_SLACK_COMPLETE: 'WB_AUTH_SLACK_COMPLETE',
  WB_AUTH_SLACK_ERROR: 'WB_AUTH_SLACK_ERROR',

  WB_AUTH_TRELLO: 'WB_AUTH_TRELLO',
  WB_AUTH_TRELLO_COMPLETE: 'WB_AUTH_TRELLO_COMPLETE',
  WB_AUTH_TRELLO_ERROR: 'WB_AUTH_TRELLO_ERROR',

  WB_AUTH_WAVEBOX: 'WB_AUTH_WAVEBOX',
  WB_AUTH_WAVEBOX_COMPLETE: 'WB_AUTH_WAVEBOX_COMPLETE',
  WB_AUTH_WAVEBOX_ERROR: 'WB_AUTH_WAVEBOX_ERROR',

  // Window Management
  WB_NEW_WINDOW: 'WB_NEW_WINDOW',
  WB_FOCUS_AUTH_WINDOW: 'WB_FOCUS_AUTH_WINDOW',
  WB_FOCUS_MAILBOXES_WINDOW: 'WB_FOCUS_MAILBOXES_WINDOW',

  // Tray
  WB_TOGGLE_MAILBOX_WINDOW_FROM_TRAY: 'WB_TOGGLE_MAILBOX_WINDOW_FROM_TRAY',
  WB_SHOW_MAILBOX_WINDOW_FROM_TRAY: 'WB_SHOW_MAILBOX_WINDOW_FROM_TRAY',
  WB_HIDE_MAILBOX_WINDOW_FROM_TRAY: 'WB_HIDE_MAILBOX_WINDOW_FROM_TRAY',
  WB_TOGGLE_TRAY_POPOUT: 'WB_TOGGLE_TRAY_POPOUT',
  WB_HIDE_TRAY: 'WB_HIDE_TRAY',
  WB_SHOW_TRAY: 'WB_SHOW_TRAY',
  WB_SHOW_TRAY_WINDOWED: 'WB_SHOW_TRAY_WINDOWED',
  WB_SHOW_TRAY_DOCKED: 'WB_SHOW_TRAY_DOCKED',
  WB_TRAY_COMPOSE_NEW: 'WB_TRAY_COMPOSE_NEW',
  WB_TRAY_OPEN_ITEM: 'WB_TRAY_OPEN_ITEM',
  WB_TRAY_TOGGLE_WINDOW_MODE: 'WB_TRAY_TOGGLE_WINDOW_MODE',
  WB_TRAY_WINDOWED_MODE_CHANGED: 'WB_TRAY_WINDOWED_MODE_CHANGED',
  WB_TOGGLE_TRAY_WITH_BOUNDS: 'WB_TOGGLE_TRAY_WITH_BOUNDS',

  // Generic Windows
  WB_WINDOW_FIND_START: 'WB_WINDOW_FIND_START',
  WB_WINDOW_FIND_NEXT: 'WB_WINDOW_FIND_NEXT',
  WB_WINDOW_DARWIN_SCROLL_TOUCH_BEGIN: 'WB_WINDOW_DARWIN_SCROLL_TOUCH_BEGIN',
  WB_WINDOW_DARWIN_SCROLL_TOUCH_END: 'WB_WINDOW_DARWIN_SCROLL_TOUCH_END',
  WB_WINDOW_FOCUS: 'WB_WINDOW_FOCUS',
  WB_WINDOW_BLUR: 'WB_WINDOW_BLUR',

  // Mailboxes window
  WB_MAILBOXES_WINDOW_JS_LOADED: 'WB_MAILBOXES_WINDOW_JS_LOADED',
  WB_MAILBOXES_WINDOW_REQUEST_GRACEFUL_RELOAD: 'WB_MAILBOXES_WINDOW_REQUEST_GRACEFUL_RELOAD',
  WB_MAILBOXES_WINDOW_ACCEPT_GRACEFUL_RELOAD: 'WB_MAILBOXES_WINDOW_ACCEPT_GRACEFUL_RELOAD',
  WB_MAILBOXES_WINDOW_DOWNLOAD_COMPLETE: 'WB_MAILBOXES_WINDOW_DOWNLOAD_COMPLETE',
  WB_MAILBOXES_WINDOW_WEBVIEW_LIFECYCLE_SLEEP: 'WB_MAILBOXES_WINDOW_WEBVIEW_LIFECYCLE_SLEEP',
  WB_MAILBOXES_WINDOW_WEBVIEW_LIFECYCLE_AWAKEN: 'WB_MAILBOXES_WINDOW_WEBVIEW_LIFECYCLE_AWAKEN',
  WB_MAILBOXES_WINDOW_SHOW_SETTINGS: 'WB_MAILBOXES_WINDOW_SHOW_SETTINGS',
  WB_MAILBOXES_WINDOW_SHOW_SUPPORT_CENTER: 'WB_MAILBOXES_WINDOW_SHOW_SUPPORT_CENTER',
  WB_MAILBOXES_WINDOW_SHOW_NEWS: 'WB_MAILBOXES_WINDOW_SHOW_NEWS',
  WB_MAILBOXES_WINDOW_SHOW_WAVEBOX_ACCOUNT: 'WB_MAILBOXES_WINDOW_SHOW_WAVEBOX_ACCOUNT',
  WB_MAILBOXES_WINDOW_ADD_ACCOUNT: 'WB_MAILBOXES_WINDOW_ADD_ACCOUNT',
  WB_MAILBOXES_WINDOW_MAILBOX_WEBVIEW_ATTACHED: 'WB_MAILBOXES_WINDOW_MAILBOX_WEBVIEW_ATTACHED',
  WB_MAILBOXES_WINDOW_EXTENSION_WEBVIEW_ATTACHED: 'WB_MAILBOXES_WINDOW_EXTENSION_WEBVIEW_ATTACHED',
  WB_MAILBOXES_WINDOW_TAB_ACTIVATED: 'WB_MAILBOXES_WINDOW_TAB_ACTIVATED',

  // Browser
  WB_BROWSER_NOTIFICATION_CLICK: 'WB_BROWSER_NOTIFICATION_CLICK',
  WB_BROWSER_NOTIFICATION_PRESENT: 'WB_BROWSER_NOTIFICATION_PRESENT',
  WB_BROWSER_ALERT_PRESENT: 'WB_BROWSER_ALERT_PRESENT',
  WB_BROWSER_CONFIRM_PRESENT: 'WB_BROWSER_CONFIRM_PRESENT',
  WB_BROWSER_CONFIGURE_ALERT: 'WB_BROWSER_CONFIGURE_ALERT',
  WB_BROWSER_INJECT_CUSTOM_CONTENT: 'WB_BROWSER_INJECT_CUSTOM_CONTENT',
  WB_BROWSER_WINDOW_ICONS_IN_SCREEN: 'WB_BROWSER_WINDOW_ICONS_IN_SCREEN',
  WB_BROWSER_OPEN_MESSAGE: 'WB_BROWSER_OPEN_MESSAGE',
  WB_BROWSER_COMPOSE_MESSAGE: 'WB_BROWSER_COMPOSE_MESSAGE',

  // Spellchecker
  WB_SPELLCHECKER_CONNECT: `${MAIN_ONLY_PFX}WB_SPELLCHECKER_CONNECT`,
  WB_SPELLCHECKER_CONFIGURE: `${MAIN_ONLY_PFX}WB_SPELLCHECKER_CONFIGURE`,
  WB_SPELLCHECKER_INIT: `${MAIN_ONLY_PFX}WB_SPELLCHECKER_INIT`,
  WB_SPELLCHECKER_INIT_CONFIGURE: `${MAIN_ONLY_PFX}WB_SPELLCHECKER_INIT_CONFIGURE`,
  WB_SPELLCHECKER_CHECK_SPELLING_SYNC: 'WB_SPELLCHECKER_CHECK_SPELLING_SYNC',
  WB_SPELLCHECKER_GET_PRIMARY_DICTIONARY_SYNC: 'WB_SPELLCHECKER_GET_PRIMARY_DICTIONARY_SYNC',
  WB_SPELLCHECKER_GET_SECONDARY_DICTIONARY_SYNC: 'WB_SPELLCHECKER_GET_SECONDARY_DICTIONARY_SYNC',

  // Google
  WB_BROWSER_GOOGLE_INBOX_TOP_MESSAGE_CHANGED: 'WB_BROWSER_GOOGLE_INBOX_TOP_MESSAGE_CHANGED',
  WB_BROWSER_GOOGLE_GMAIL_UNREAD_COUNT_CHANGED: 'WB_BROWSER_GOOGLE_GMAIL_UNREAD_COUNT_CHANGED',
  WB_BROWSER_GOOGLE_COMMUNICATION_UNREAD_COUNT_CHANGED: 'WB_BROWSER_GOOGLE_COMMUNICATION_UNREAD_COUNT_CHANGED',
  WB_BROWSER_GOOGLE_CALENDAR_ALERT_PRESENTED: 'WB_BROWSER_GOOGLE_CALENDAR_ALERT_PRESENTED',
  WB_BROWSER_GOOGLE_MESSENGER_UNREAD_COUNT_CHANGED: 'WB_BROWSER_GOOGLE_MESSENGER_UNREAD_COUNT_CHANGED',

  // Chrome Extension
  WBECRX_EXECUTE_SCRIPT: 'WBECRX_EXECUTE_SCRIPT',

  // Wavebox API
  WB_GUEST_API_REQUEST: 'WB_GUEST_API_REQUEST',
  WB_GUEST_API_READ_SYNC: 'WB_GUEST_API_READ_SYNC',

  // Notification permissions
  WB_NOTIFICATION_PERMISSION_SET_SYNC: 'WB_NOTIFICATION_PERMISSION_SET_SYNC',

  // Resource usage
  WB_COLLECTED_METRICS: 'WB_COLLECTED_METRICS',
  WB_START_CONNECTION_REPORTER: 'WB_START_CONNECTION_REPORTER',
  WB_COLLECT_CONNECTION_METRICS: 'WB_COLLECT_CONNECTION_METRICS',
  WB_METRICS_OPEN_MONITOR: 'WB_METRICS_OPEN_MONITOR',
  WB_METRICS_OPEN_LOG: 'WB_METRICS_OPEN_LOG',
  WB_METRICS_GET_CHROMIUM_METRICS_SYNC: 'WB_METRICS_GET_CHROMIUM_METRICS_SYNC',

  // App lifecycle
  WB_FOCUS_APP: 'WB_FOCUS_APP',
  WB_QUIT_APP: 'WB_QUIT_APP',
  WB_RELAUNCH_APP: 'WB_RELAUNCH_APP',

  // Data management
  WB_CLEAN_EXPIRED_SESSIONS: 'WB_CLEAN_EXPIRED_SESSIONS',

  // Squirrel & Update
  WB_SQUIRREL_UPDATE_CHECK: 'WB_SQUIRREL_UPDATE_CHECK',
  WB_SQUIRREL_APPLY_UPDATE: 'WB_SQUIRREL_APPLY_UPDATE',
  WB_USER_CHECK_FOR_UPDATE: 'WB_USER_CHECK_FOR_UPDATE',
  WB_SQUIRREL_UPDATE_DOWNLOADED: 'WB_SQUIRREL_UPDATE_DOWNLOADED',
  WB_SQUIRREL_UPDATE_ERROR: 'WB_SQUIRREL_UPDATE_ERROR',
  WB_SQUIRREL_UPDATE_AVAILABLE: 'WB_SQUIRREL_UPDATE_AVAILABLE',
  WB_SQUIRREL_UPDATE_NOT_AVAILABLE: 'WB_SQUIRREL_UPDATE_NOT_AVAILABLE',
  WB_SQUIRREL_UPDATE_CHECK_START: 'WB_SQUIRREL_UPDATE_CHECK_START',
  WB_SQUIRREL_UPDATE_DISABLED: 'WB_SQUIRREL_UPDATE_DISABLED',

  // User Management
  WB_USER_SET_CLIENT_TOKEN: 'WB_USER_SET_CLIENT_TOKEN',
  WB_USER_SET_USER: 'WB_USER_SET_USER',

  // Takeout
  WB_TAKEOUT_IMPORT_FILE: 'WB_TAKEOUT_IMPORT_FILE',
  WB_TAKEOUT_EXPORT_FILE: 'WB_TAKEOUT_EXPORT_FILE',
  WB_TAKEOUT_EXPORT_SERVER: 'WB_TAKEOUT_EXPORT_SERVER',
  WB_TAKEOUT_EXPORT_SERVER_: 'WB_TAKEOUT_EXPORT_SERVER_',
  WB_TAKEOUT_EXPORT_SERVER_CHANGESET: 'WB_TAKEOUT_EXPORT_SERVER_CHANGESET',
  WB_TAKEOUT_EXPORT_SERVER_CHANGESET_: 'WB_TAKEOUT_EXPORT_SERVER_CHANGESET_',
  WB_TAKEOUT_IMPORT_SERVER: 'WB_TAKEOUT_IMPORT_SERVER',

  // Keychain
  WB_KEYCHAIN_REQUEST_CREDENTIALS: 'WB_KEYCHAIN_REQUEST_CREDENTIALS',
  WB_KEYCHAIN_SUPPLY_CREDENTIALS: 'WB_KEYCHAIN_SUPPLY_CREDENTIALS',
  WB_KEYCHAIN_ADD_CREDENTIALS: 'WB_KEYCHAIN_ADD_CREDENTIALS',
  WB_KEYCHAIN_DELETE_CREDENTIALS: 'WB_KEYCHAIN_DELETE_CREDENTIALS',

  // Linux Notification
  WB_LIN_NOTIF_RENDER: 'WB_LIN_NOTIF_RENDER',
  WB_LIN_NOTIF_PLAY_AUDIO: 'WB_LIN_NOTIF_PLAY_AUDIO',
  WB_LIN_NOTIF_CLICK: 'WB_LIN_NOTIF_CLICK',
  WB_LIN_NOTIF_CLOSE: 'WB_LIN_NOTIF_CLOSE',
  WB_LIN_NOTIF_PRESENT: 'WB_LIN_NOTIF_PRESENT',

  // Fetch Service
  WB_FETCH_SERVICE_TEXT: 'WB_FETCH_SERVICE_TEXT'
})

class WaveboxCommandArgs {
  /**
  * Processes the window visibility command line arguments
  * @param argv: the arguments as processed by yargs
  * @param mainWindow: the main window
  */
  static processWindowVisibility (argv, mainWindow) {
    // Hide/show main window
    if (mainWindow) {
      if (argv.hidden || argv.hide) {
        mainWindow.hide()
      } else {
        mainWindow.show()
        mainWindow.focus()
      }
    }
  }

  /**
  * Processes the command line arguments
  * @param argv: the arguments as processed by yargs
  * @param emblinkActions: the embed link actions
  * @param mailboxActions: the mailbox actions
  */
  static processModifierArgs (argv, emblinkActions, mailboxActions) {
    // Mailto
    let mailtoStr
    if (argv.mailto && argv.mailto.startsWith('mailto:')) {
      mailtoStr = argv.mailto
    } else {
      const unpinnedMailto = argv._.find((a) => a.startsWith('mailto:'))
      if (unpinnedMailto) {
        mailtoStr = unpinnedMailto
      }
    }
    if (mailtoStr) {
      emblinkActions.composeNewMailtoLink(mailtoStr)
    }

    // Mailbox index
    const accountIndex = parseInt(argv.accountIndex)
    if (!isNaN(accountIndex)) {
      mailboxActions.changeActiveIndex(accountIndex)
    }
  }
}

export default WaveboxCommandArgs

import PropTypes from 'prop-types'
import React from 'react'
import shallowCompare from 'react-addons-shallow-compare'
import Color from 'color'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import fasExclamation from '@fortawesome/fontawesome-pro-solid/faExclamation'

const RADIUS = 12
const styles = {
  root: {
    position: 'relative',
    display: 'inline-flex',
    verticalAlign: 'middle'
  },
  badge: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -RADIUS,
    right: -RADIUS,
    fontSize: RADIUS,
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderRadius: '50%',
    zIndex: 1
  },
  icon: {
    width: 18,
    height: 18
  }
}

@withStyles(styles)
class MailboxServicebadge extends React.Component {
  /* **************************************************************************/
  // Class
  /* **************************************************************************/

  static propTypes = {
    isAuthInvalid: PropTypes.bool.isRequired,
    supportsUnreadCount: PropTypes.bool.isRequired,
    showUnreadBadge: PropTypes.bool.isRequired,
    unreadCount: PropTypes.number.isRequired,
    supportsUnreadActivity: PropTypes.bool.isRequired,
    showUnreadActivityBadge: PropTypes.bool.isRequired,
    hasUnreadActivity: PropTypes.bool.isRequired,
    color: PropTypes.string,
    badgeClassName: PropTypes.string,
    iconClassName: PropTypes.string,
    badgeStyle: PropTypes.object,
    iconStyle: PropTypes.object
  }

  /* **************************************************************************/
  // Rendering
  /* **************************************************************************/

  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  render () {
    const {
      isAuthInvalid,
      supportsUnreadCount,
      showUnreadBadge,
      unreadCount,
      supportsUnreadActivity,
      showUnreadActivityBadge,
      hasUnreadActivity,
      color,
      style,
      children,
      classes,
      className,
      badgeClassName,
      iconClassName,
      badgeStyle,
      iconStyle,
      ...passProps
    } = this.props

    let colorInverse
    try {
      if (color) {
        colorInverse = Color(color).light() ? 'black' : 'white'
      }
    } catch (ex) { /* no-op */ }

    let badgeContent
    if (isAuthInvalid) {
      badgeContent = (
        <FontAwesomeIcon
          icon={fasExclamation}
          className={classNames(classes.icon, iconClassName)}
          style={{ color: colorInverse, ...iconStyle }} />
      )
    } else if (supportsUnreadCount && showUnreadBadge && unreadCount) {
      badgeContent = unreadCount >= 1000 ? Math.floor(unreadCount / 1000) + 'K+' : unreadCount
    } else if (supportsUnreadActivity && showUnreadActivityBadge && hasUnreadActivity) {
      badgeContent = '●'
    }

    if (!badgeContent && !children) { return false }

    return (
      <span className={classNames(classes.root, className)} {...passProps}>
        {children}
        {badgeContent ? (
          <span
            className={classNames(classes.badge, badgeClassName)}
            style={{ backgroundColor: color, color: colorInverse, ...badgeStyle }}>
            {badgeContent}
          </span>
        ) : undefined}
      </span>
    )
  }
}

export default MailboxServicebadge

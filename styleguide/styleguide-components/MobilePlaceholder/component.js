import React from 'react';
import Styled from 'rsg-components/Styled';

import LogoRenderer from '../LogoRenderer';

import { getMailToHref } from './getMailToHref';

const styles = ({ borderRadius, color, mq, space }) => ({
  screen: {
    background: color.baseBackground,
    display: 'none',
    height: '100vh',
    overflowY: 'scroll',
    padding: space[4],
    position: 'fixed',
    visibility: 'hidden',
    width: '100vw',
    zIndex: 2,

    [mq.small]: {
      display: 'block',
      visibility: 'visible',
    },
  },
  heading: {
    isolate: false,
    lineHeight: '1em',
  },
  input: {
    background: color.white,
    borderRadius,
    padding: space[1],
    width: '100%',

    '&:focus': {
      isolate: false,
      outline: 'none',
    }
  },
  button: {
    background: color.linkHover,
    borderRadius,
    color: color.white,
    display: 'inline-block',
    marginTop: space[2],
    padding: [[space[1], space[5]]],

    '&:hover': {
      isolate: false,
      color: color.white,
      textDecoration: 'none',
    }
  }
})

class Markup extends React.Component {

  state = {
    email: ''
  }

  handleChange = event => this.setState({ email: event.target.value })

  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.screen} onScroll={console.log}>
        <div>
          <LogoRenderer hasNoMargin />
          <h1 className={classes.heading}>Yo</h1>
          <p>Lodgify UI is intended to be viewed on devices with larger screens.</p>
          <p>Why not send yourself a reminder to come back when you get to your computer?</p>
          <p>Don't worry - we don't store your email.</p>
          <input
            className={classes.input}
            onChange={this.handleChange}
            placeholder="Your email"
            type="email"
            value={this.state.email}
          />
          <a
            className={classes.button}
            href={getMailToHref(this.state.email)}
            >
            Send
          </a>
        </div>
      </div>
    )
  }
}

export const Component = Styled(styles)(Markup);

Component.displayName = 'MobilePlaceholder';

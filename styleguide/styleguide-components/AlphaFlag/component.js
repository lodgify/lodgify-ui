import React from 'react';
import Styled from 'rsg-components/Styled';

const styles = ({ color, fontFamily }) => ({
  flag: {
    alignItems: 'center',
    background: color.linkHover,
    color: color.white,
    display: 'flex',
    flexDirection: 'column',
    fontFamily: fontFamily.heading,
    height: 100,
    justifyContent: 'flex-end',
    padding: 20,
    position: 'fixed',
    right: -90,
    textAlign: 'center',
    textTransform: 'uppercase',
    transform: 'rotate(45deg)',
    top: 35,
    width: 350,
    zIndex: 1,
  },
  heading: {
    fontFamily: 'inherit',
    fontSize: '40px',
    fontWeight: 'bold',
    lineHeight: 1,
    textTransform: 'inherit',
  }
})

const markup = ({classes}) => (
  <div className={classes.flag}>
    <span className={classes.heading}>Alpha</span>
    Consume at your own risk
  </div>
)

export const component = Styled(styles)(markup);
component.displayName = 'AlphaFlag';

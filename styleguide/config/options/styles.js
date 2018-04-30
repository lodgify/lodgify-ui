const { color, fontFamily } = require('./theme');

module.exports = {
  Heading: {
    heading: {
      lineHeight: 1,
    },
    heading1: {
      color: color.light,
      fontFamily: fontFamily.heading,
      marginBottom: '1em !important',
      paddingTop: '30px !important',
      textTransform: 'uppercase',
      'main > &': {
        paddingTop: '0 !important',
      },
    },
    heading2: {
      paddingTop: '30px !important',
    },
  },
  Playground: {
    preview: {
      background: color.white,
    },
  },
  ReactComponent: {
    root: {
      marginBottom: '200px',
    },
  },
  Section: {
    root: {
      marginBottom: '200px',
    },
  },
  StyleGuide: {
    content: {
      minHeight: '100vh',
    },
    logo: {
      borderBottom: 0,
      marginBottom: 30,
      padding: 0,
    },
    sidebar: {
      boxShadow: `0px 0 10px -2px ${color.light}`,
      padding: 30,
    },
  },
  TableOfContents: {
    input: {
      backgroundColor: color.white,
    },
    search: {
      marginBottom: '30px',
      marginLeft: '-2px',
      padding: 0,
    },
    root: {
      fontFamily: fontFamily.base,
      '& > ul > li > a': {
        textTransform: 'uppercase !important',
      },
    },
  },
};

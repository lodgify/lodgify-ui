const { color, fontFamily } = require('./theme');

module.exports = {
  Heading: {
    heading: {
      lineHeight: 1,
    },
    heading1: {
      margin: '30px 0 !important',
    },
    heading2: {
      fontWeight: 'bold',
      marginTop: '30px !important',
    },
    heading3: {
      marginTop: '50px !important',
    },
  },
  Playground: {
    root: {
      marginBottom: '100px',
    },
    preview: {
      background: color.white,
    },
  },
  ReactComponent: {
    root: {
      marginBottom: '200px',
    },
    docs: {
      marginBottom: '30px',
    },
    tabs: {
      marginBottom: '100px',
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

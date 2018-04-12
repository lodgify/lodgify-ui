const { TITLE } = require('../constants');

module.exports = {
  head: {
    raw: `
      <style>
        @font-face {
          font-family: Brother-1816;
          src: url('07-Brother1816-Regular.otf') format('opentype');
        }
        @font-face {
          font-family: Brother-1816-Black;
          src: url('15-Brother1816-Black.otf') format('opentype');
        }
      </style>
    `,
  },
  title: TITLE,
};

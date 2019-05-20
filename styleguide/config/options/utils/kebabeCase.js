const kebabCase = string =>
  typeof string === 'string' ? string.replace(/\s+/g, '-').toLowerCase() : '';

module.exports = kebabCase;

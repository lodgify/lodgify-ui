module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'comment-empty-line-before': ['always', { ignore: ['stylelint-commands'] }],
    'comment-whitespace-inside': null,
    'no-descending-specificity': null,
    'rule-empty-line-before': [
      'always-multi-line',
      { ignore: ['after-comment'] },
    ],
    'selector-pseudo-element-colon-notation': 'single',
  },
};

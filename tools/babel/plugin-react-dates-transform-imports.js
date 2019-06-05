const PACKAGE_REGEX = /^((.*!)?react-dates)([/\\].*)?$/;

const getIsReactComponentIdentifier = name => name[0].toUpperCase() === name[0];

module.exports = ({
  types: {
    identifier,
    importDeclaration,
    importDefaultSpecifier,
    importSpecifier,
    stringLiteral,
  },
}) => ({
  visitor: {
    ImportDeclaration: (path, state) => {
      const match = PACKAGE_REGEX.exec(path.node.source.value);

      // Do nothing if the import statement is not from `react-dates`
      if (!match) return;

      const importLibraryName = match[1];
      const importPathName = match[3] || '';
      const importModuleType = state.opts.importType === 'es' ? 'esm' : 'lib';

      // Do nothing if the import statement has already been replaced
      if (importPathName.includes(importModuleType)) return;

      // Add `esm` or `lib` directory if the imports reaches beyond the `react-dates` API
      if (importPathName) {
        path.replaceWith(
          importDeclaration(
            path.node.specifiers.map(({ local: { name } }) =>
              importSpecifier(identifier(name), identifier(name))
            ),
            stringLiteral(
              `${importLibraryName}/${importModuleType}${importPathName}`
            )
          )
        );
        return;
      }

      // Replace with default import from relevant `react-dates` file
      path.replaceWithMultiple(
        path.node.specifiers.map(({ local: { name } }) =>
          importDeclaration(
            [importDefaultSpecifier(identifier(name))],
            stringLiteral(
              `${importLibraryName}/${importModuleType}/${
                getIsReactComponentIdentifier(name) ? 'components' : 'utils'
              }/${name}`
            )
          )
        )
      );
    },
  },
});

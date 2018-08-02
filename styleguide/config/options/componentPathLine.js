const path = require('path');

const getLastFolderFromFilePath = filePath => {
  const directory = path.dirname(filePath);

  return directory.substring(directory.lastIndexOf(path.sep) + 1);
};

const getPathLine = componentPath => {
  const name = getLastFolderFromFilePath(componentPath);
  const dir = '@lodgify/ui';

  return `import { ${name} } from '${dir}';`;
};

module.exports = getPathLine;

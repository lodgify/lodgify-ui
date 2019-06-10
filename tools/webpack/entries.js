const path = require('path');

const ROOT_PATH = path.join(__dirname, '..', '..');
const SRC_STYLES_PATH = path.join(ROOT_PATH, 'src', 'styles');
const SRC_SEMANTIC_STYLES_PATH = path.join(
  ROOT_PATH,
  'src',
  'styles',
  'semantic'
);

module.exports = {
  accordion: path.join(SRC_SEMANTIC_STYLES_PATH, 'accordion.less'),
  'block-placeholder': path.join(
    SRC_SEMANTIC_STYLES_PATH,
    'block-placeholder.less'
  ),
  button: path.join(SRC_SEMANTIC_STYLES_PATH, 'button.less'),
  card: path.join(SRC_SEMANTIC_STYLES_PATH, 'card.less'),
  checkbox: path.join(SRC_SEMANTIC_STYLES_PATH, 'checkbox.less'),
  container: path.join(SRC_SEMANTIC_STYLES_PATH, 'container.less'),
  dimmer: path.join(SRC_SEMANTIC_STYLES_PATH, 'dimmer.less'),
  divider: path.join(SRC_SEMANTIC_STYLES_PATH, 'divider.less'),
  dropdown: path.join(SRC_SEMANTIC_STYLES_PATH, 'dropdown.less'),
  flag: path.join(SRC_SEMANTIC_STYLES_PATH, 'flag.less'),
  'flex-container': path.join(SRC_SEMANTIC_STYLES_PATH, 'flex-container.less'),
  form: path.join(SRC_SEMANTIC_STYLES_PATH, 'form.less'),
  globals: path.join(SRC_STYLES_PATH, 'globals.less'),
  grid: path.join(SRC_SEMANTIC_STYLES_PATH, 'grid.less'),
  header: path.join(SRC_SEMANTIC_STYLES_PATH, 'header.less'),
  html: path.join(SRC_SEMANTIC_STYLES_PATH, 'html.less'),
  icon: path.join(SRC_SEMANTIC_STYLES_PATH, 'icon.less'),
  image: path.join(SRC_SEMANTIC_STYLES_PATH, 'image.less'),
  input: path.join(SRC_SEMANTIC_STYLES_PATH, 'input.less'),
  item: path.join(SRC_SEMANTIC_STYLES_PATH, 'item.less'),
  label: path.join(SRC_SEMANTIC_STYLES_PATH, 'label.less'),
  list: path.join(SRC_SEMANTIC_STYLES_PATH, 'list.less'),
  'lodgify-ui': path.join(SRC_SEMANTIC_STYLES_PATH, 'lodgify-ui.less'),
  menu: path.join(SRC_SEMANTIC_STYLES_PATH, 'menu.less'),
  message: path.join(SRC_SEMANTIC_STYLES_PATH, 'message.less'),
  modal: path.join(SRC_SEMANTIC_STYLES_PATH, 'modal.less'),
  popup: path.join(SRC_SEMANTIC_STYLES_PATH, 'popup.less'),
  'property-page-search-bar': path.join(
    SRC_SEMANTIC_STYLES_PATH,
    'property-page-search-bar.less'
  ),
  quote: path.join(SRC_SEMANTIC_STYLES_PATH, 'quote.less'),
  rating: path.join(SRC_SEMANTIC_STYLES_PATH, 'rating.less'),
  'react-dates-datepicker': path.join(
    SRC_SEMANTIC_STYLES_PATH,
    'react-dates-datepicker.less'
  ),
  'react-image-gallery': path.join(
    SRC_SEMANTIC_STYLES_PATH,
    'react-image-gallery.less'
  ),
  'react-player': path.join(SRC_SEMANTIC_STYLES_PATH, 'react-player.less'),
  'search-bar': path.join(SRC_SEMANTIC_STYLES_PATH, 'search-bar.less'),
  segment: path.join(SRC_SEMANTIC_STYLES_PATH, 'segment.less'),
  statistic: path.join(SRC_SEMANTIC_STYLES_PATH, 'statistic.less'),
  table: path.join(SRC_SEMANTIC_STYLES_PATH, 'table.less'),
  'text-placeholder': path.join(
    SRC_SEMANTIC_STYLES_PATH,
    'text-placeholder.less'
  ),
  thumbnail: path.join(SRC_SEMANTIC_STYLES_PATH, 'thumbnail.less'),
  transition: path.join(SRC_SEMANTIC_STYLES_PATH, 'transition.less'),
};

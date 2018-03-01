const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

// Configure enzyme
// http://airbnb.io/enzyme/
configure({ adapter: new Adapter() });

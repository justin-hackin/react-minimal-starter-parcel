import React from 'react';
import PropTypes from 'prop-types';

import ReactDOM from 'react-dom';

const Hello = ({who}) => <p>Hello {who}</p>;

Hello.propTypes = {
  who: PropTypes.string.isRequired
};

const App = () => (
  <>
    <Hello who="React Minimal Starter Parcel" />
    <p>Run this with</p>
    <code>npm start</code>
    <p>Build it with</p>
    <code>npm run build</code>
  </>
);

ReactDOM.render(<App />, document.querySelector('#app'));

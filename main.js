import React from 'react';
import ReactDOM from 'react-dom';

const fileName = './package.json';

class App extends React.Component {
  async componentDidMount() {
    // this works
    const json = await import('./package.json');

    // this does not
    // const json = await import(fileName);
    this.setState({ json });
  }

  render() {
    const { json } = this.state || {};
    if (!json) { return false; }
    return (<div>
      {JSON.stringify(json, null, 2)}
    </div>);
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));

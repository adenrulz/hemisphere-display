import React from 'react';
import reactDom from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import HemisphereDisplay from './HemisphereDisplay';


class App extends React.Component {

  state = { latitude: null, errorMessage: ' ' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude })
      },
      (error) => {
        this.setState({ errorMessage: error.message })
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>{this.state.errorMessage}</div>
    }

    else {
      return <div><HemisphereDisplay latitude={this.state.latitude} /></div>
    }

  }
}
reactDom.render(<App />, document.querySelector('#root'))
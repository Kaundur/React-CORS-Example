import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            img: undefined,
            alt: '',
        };
    }

    componentDidMount() {
        fetch('info.0.json')
        .then(response => response.json())
        .then(data => this.setState(
            {
                title: data.title,
                img: data.img,
                alt: data.alt
            }
        ))
        .catch(() => console.log('Error fetching data'))
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="App-header-text">CORS Development Example</div>
                </header>
                <h1>
                    {this.state.title}
                </h1>
                <img src={this.state.img} title={this.state.alt} alt={this.state.alt} className="img-responsive"/>

                <br/>
                <h1>Notes</h1>
                <p className="readme-text">
                    This is an example project for setting up react to handle cross origin resource sharing (CORS) while in development. The project accesses the latest XKCD comic from the endpoint https://xkcd.com/info.0.json.
                    <br/>
                    <br/>
                    This request would normally be blocked by the browser, however using the proxy setting within the package.json tells react to setup a proxy server that allows us to access resources on different origins. Note, this only works in development (using npm start) more details can be found within the react docs.
                    <br/>
                    <a href="https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development">https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development</a>
                </p>
            </div>
        );
    }
}

export default App;

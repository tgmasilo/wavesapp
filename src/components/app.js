import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.trustedFunc = this.trustedFunc.bind(this);
    }

    trustedFunc() {
        if(WavesKeeper) {
            WavesKeeper.publicState()
            .then(state => {
                console.log(state);
            }).catch(error => {
                console.log(error);
            });
        } else {
            console.log(`WavesKeeper must be installed.`)
        }
    }

    render() {
        return(
            <div className="container">
                <div className="d-flex justify-content-center">
                    <input 
                        className="btn btn-primary" 
                        type="submit"
                        value="Trusted?"
                        onClick={this.trustedFunc}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
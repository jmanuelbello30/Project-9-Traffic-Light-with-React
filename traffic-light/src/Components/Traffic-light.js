import React, { Component } from 'react';

class TrafficLight extends Component {
  constructor(){
    super();
      this.state = {
        redState: "off",
        yellowState: "off",
        greenState: "off"
      };
  }

    render(){
      return(
        <div>
          <div id="support"></div>
          <div id="TrafficLightBox">

            <div className="light red" id={this.state.redState}
              onClick={() => this.setState({ redState: "on", yellowState: "off", greenState: "off" })}>
            </div>

            <div className="light yellow" id={this.state.yellowState}
              onClick={() => this.setState({ redState: "off", yellowState: "on", greenState: "off" })}>
            </div>

            <div className="light green" id={this.state.greenState}
              onClick={() => this.setState({ redState: "off", yellowState: "off", greenState: "on" })}>
            </div>

          </div>
        </div>);
    }
}

export default TrafficLight;

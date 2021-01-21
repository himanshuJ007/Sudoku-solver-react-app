import React, { Component } from "react";
import CheckAns from "../Components/CheckAns";
import smile from "../smile.jpg";
import "../index.css";
class SubmitButton extends Component {
  state = {
    visibility: false,
  };

  showAns = () => {
    this.setState({
      visibility: true,
    });
  };
  render() {
    return (
      <div>
        {!this.state.visibility && (
          <div className="submit">
            <button className="button" onClick={this.showAns}>
              <img className="icon" src={smile} />
              Submit
            </button>
          </div>
        )}
        {this.state.visibility && (
          <div className="submit">
            <CheckAns response={this.props.response} ans={this.props.ans} />
          </div>
        )}
      </div>
    );
  }
}
export default SubmitButton;

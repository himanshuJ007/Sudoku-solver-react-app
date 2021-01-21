import React, { Component } from "react";
import Grid from "../Components/Grid";
import solution from "../solution.jpg";
import shy from "../shy.jpg";
class SolutionButton extends Component {
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
      {!this.state.visibility && (<div>
        <button className="button" onClick={this.showAns}>
          <img className="icon" src={shy} />
          Solution
        </button></div>)}
        {this.state.visibility && (
          <div>
          <br></br>
            <img src={solution} />
            <br></br><br></br>
            <Grid data={this.props.answer} />
          </div>
        )}
      </div>
    );
  }
}
export default SolutionButton;

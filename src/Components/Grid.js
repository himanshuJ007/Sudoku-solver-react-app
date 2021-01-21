import React, { Component } from "react";
import Row from "../Components/Row";
class Grid extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((val, index) => {
          return (
            <Row rowdata={val} response={this.props.response} col={index} />
          );
        })}
      </div>
    );
  }
}
export default Grid;

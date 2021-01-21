import React, { Component } from "react";
import "../index.css";
class Row extends Component {
  updateResponse = (event) => {
    // console.log("id==",event.target.attributes.id.value);
    // console.log("val==",event.target.value);
    // console.log(this.props.response);
    this.props.response[this.props.col][
      event.target.attributes.id.value
    ] = parseInt(event.target.value);
    
  };

  render() {
    if (this.props.response) {
      return (
        <div className="row">
          {this.props.rowdata.map((data, index) => {
            if (data === 0) {
              return (
                <input
                  className="box"
                  type="text"
                  maxlength="1"
                  placeholder={data}
                  key={index.toString()+this.props.col.toString()}
                  id={index}
                  onChange={this.updateResponse}
                />
              );
            } else {
              return (
                <input
                  className="box"
                  type="text"
                  maxlength="1"
                  value={data}
                  key={index.toString()+this.props.col.toString()}
                  id={index}
                  onChange={this.updateResponse}
                />
              );
            }
          })}
        </div>
      );
    } else {
      return (
        <div className="row">
          {this.props.rowdata.map((data, index) => {
            if (data === 0) {
              return (
                <input
                  className="box"
                  type="text"
                  maxlength="1"
                  placeholder={data}
                  key={index.toString()+this.props.col.toString()}
                />
              );
            } else {
              return (
                <input
                  className="box"
                  type="text"
                  maxlength="1"
                  value={data}
                  key={index.toString()+this.props.col.toString()}
                />
              );
            }
          })}
        </div>
      );
    }
  }
}
export default Row;

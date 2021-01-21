import React from "react";
import right from "../right.png";
import wrong from "../wrong.jpg";
import "../index.css";
function CheckAns(props) {
  if (JSON.stringify(props.response) === JSON.stringify(props.ans)) {
    return (
      <div>
        <img className="ans" src={right} />
      </div>
    );
  } else {
    return (
      <div>
        <img className="ans" src={wrong} />
      </div>
    );
  }
}
export default CheckAns;

import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function SessionLength(props) {
  return (
    <div>
      <h4 id='session-label'>Session Length</h4>
      <Button
        onClick={props.increaseSession}
        id='session-increment'
        disabled={!props.timerRunning ? "" : "disabled"}
      >
        <FontAwesomeIcon icon={faPlus} />
      </Button>
      <p id='session-length'>{props.sessionLength}</p>
      <Button
        onClick={props.decreaseSession}
        id='session-decrement'
        disabled={!props.timerRunning ? "" : "disabled"}
      >
        <FontAwesomeIcon icon={faMinus} />
      </Button>
    </div>
  );
}

export default SessionLength;

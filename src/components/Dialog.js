import React from "react";
import $ from "jquery";

const Dialog = (props) => {
  return (
    <div className="dialog" id={props.id}>
      <div className="dialog_content">
        <div className="dialog_fields">
          <h1>{props.heading}</h1>
        </div>
        <div className="dialog_fields">
          <input className="input_field_container" />
        </div>
        <div className="dialog_fields">
          <button className="button">{props.button}</button>
        </div>
        <div className="dialog_fields">
          <button
            className="button"
            onClick={() => {
              $(`#${props.id}`).hide();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;

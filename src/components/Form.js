import React, { Component } from "react";
import { Grid } from "@material-ui/core";

const Form = () => {
  const changeColor = (id) => {
    let element = document.getElementById(`${id}`).style;
    element.backgroundColor = "#1e65e5";
  };
  return (
    <div className="form_container">
      <div className="input_label">Company </div>
      <input className="input_field_container" />
      <div className="input_label">Logo </div>
      <input className="input_field_container" />

      <div className="input_label">No. Of Assignments </div>
      <input className="input_field_container" />
      <div className="input_label">No. of opening </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div
          className="chip"
          id="c_1"
          onClick={(e) => changeColor(e.target.id)}
        >
          Yet to be uploaded
        </div>
        <input className="input_field_container" />
      </div>
      <div className="input_label">Tags</div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div
          onClick={(e) => changeColor(e.target.id)}
          id="c_2"
          className="chip"
        >
          Artificial Intelligence
        </div>
        <div
          onClick={(e) => changeColor(e.target.id)}
          id="c_3"
          className="chip"
        >
          Machine Learning
        </div>
        <div
          onClick={(e) => changeColor(e.target.id)}
          id="c_4"
          className="chip"
        >
          Neural Networks
        </div>
        <div
          onClick={(e) => changeColor(e.target.id)}
          id="c_5"
          className="chip"
        >
          Saas
        </div>
        <div
          onClick={(e) => changeColor(e.target.id)}
          id="c_6"
          className="chip"
        >
          Fintech
        </div>
        <div
          onClick={(e) => changeColor(e.target.id)}
          id="c_7"
          className="chip"
        >
          Deep-learning
        </div>
        <div
          onClick={(e) => changeColor(e.target.id)}
          id="c_7"
          className="chip"
        >
          Final-Services
        </div>
        <div
          onClick={(e) => console.log("adding tag")}
          id="c_7"
          className="schip"
        >
          + add-tag
        </div>
      </div>
    </div>
  );
};

export default Form;

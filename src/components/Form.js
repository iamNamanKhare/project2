import React, { Component } from "react";
import { Grid } from "@material-ui/core";

const Form = () => {
  const changeColor = (id) => {
    let element = document.getElementById(`${id}`).style;
    element.backgroundColor = "#1e65e5";
  };
  const changeBorder = (id) => {
    let style = document.getElementById(`${id}`).style;
    style.borderColor = "#2dc5a1";
    style.borderWidth = "2px";
  };
  return (
    <div className="form_container">
      <div className="input_label">Company </div>
      <input
        className="input_field_container"
        id="i_1"
        onClick={(e) => changeBorder(e.target.id)}
      />
      <div className="input_label">Logo </div>
      <input
        className="input_field_container"
        id="i_2"
        onClick={(e) => changeBorder(e.target.id)}
      />

      <div className="input_label">No. Of Assignments </div>
      <input
        className="input_field_container_no"
        id="i_3"
        onClick={(e) => changeBorder(e.target.id)}
      />
      <div className="input_label">No. of opening </div>
      <div className="chip_wrapper">
        <div
          className="chip"
          id="c_1"
          onClick={(e) => changeColor(e.target.id)}
        >
          Yet to be uploaded
        </div>
        <input
          className="input_field_container_no"
          id="i_4"
          onClick={(e) => changeBorder(e.target.id)}
        />
      </div>
      <div className="input_label">Tags</div>
      <div className="chip_wrapper">
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
          id="c_8"
          className="chip"
        >
          Final-Services
        </div>
        <div
          onClick={(e) => console.log("adding tag")}
          id="c_9"
          className="schip"
        >
          + add-tag
        </div>
      </div>
      <div className="input_label">Company Description</div>
      <textarea className="text_area" />

      <div className="input_label">Tech Stack</div>
      <div className="chip_wrapper">
        <div
          onClick={(e) => changeColor(e.target.id)}
          id="c_10"
          className="chip"
        >
          AWS
        </div>
        <div
          onClick={(e) => changeColor(e.target.id)}
          id="c_11"
          className="chip"
        >
          React
        </div>
        <div
          onClick={(e) => changeColor(e.target.id)}
          id="c_12"
          className="chip"
        >
          Python
        </div>

        <div
          onClick={(e) => console.log("adding tag")}
          id="c_13"
          className="schip"
        >
          + Add tech-stack
        </div>
      </div>
      <div className="input_label">Openings</div>
      <div className="chip_wrapper">
        <div
          onClick={(e) => changeColor(e.target.id)}
          id="c_12"
          className="chip"
        >
          Software Development Internship
        </div>
        <div
          onClick={(e) => changeColor(e.target.id)}
          id="c_12"
          className="chip"
        >
          Full-Stack Developer
        </div>
        <div
          onClick={(e) => changeColor(e.target.id)}
          id="c_12"
          className="chip"
        >
          Supply chain intern
        </div>

        <div
          onClick={(e) => console.log("adding tag")}
          id="c_13"
          className="schip"
        >
          + Add Openings
        </div>
      </div>
    </div>
  );
};

export default Form;

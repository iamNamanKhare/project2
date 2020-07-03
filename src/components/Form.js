import React, { Component, useState } from "react";
import LocationSelect from "./LocationEmployer";
import Dialog from "./Dialog";
import $ from "jquery";
class Form extends Component {
  state = {
    add_tag: false,
  };

  dialogOpen = () => {
    this.setState({ add_tag: true });
  };
  dialogClose = () => {
    this.setState({ add_tag: false });
  };
  changeBorder = (id) => {
    let style = document.getElementById(`${id}`).style;
    style.borderColor = "#2dc5a1";
    style.borderWidth = "2px";
  };
  render() {
    return (
      <div>
        <Dialog id="dialog" heading="Add Tag" button="Add" />
        <Dialog id="dialog3" heading="Add TechStack" button="Add" />
        <Dialog id="dialog2" heading="Add Openings" button="Add" />

        <div className={this.props.class} id="form">
          <div className="input_label">Company </div>
          <input
            className="input_field_container"
            id="i_1"
            onClick={(e) => this.changeBorder(e.target.id)}
          />
          <div className="input_label">Logo </div>
          <input
            className="input_field_container"
            id="i_2"
            onClick={(e) => this.changeBorder(e.target.id)}
          />

          <div className="input_label">No. Of Assignments </div>
          <input
            className="input_field_container_no"
            id="i_3"
            onClick={(e) => this.changeBorder(e.target.id)}
          />
          <div className="input_label">No. of opening </div>
          <div className="chip_wrapper">
            <div
              className="chip"
              id="c_1"
              onClick={(e) => {
                const { id } = e.target;
                $(`#${id}`).toggleClass("chip_change");
              }}
            >
              Yet to be uploaded
            </div>
            <input
              className="input_field_container_no"
              id="i_4"
              onClick={(e) => this.changeBorder(e.target.id)}
            />
          </div>
          <div className="input_label">Tags</div>
          <div className="chip_wrapper">
            <div
              onClick={(e) => {
                const { id } = e.target;
                $(`#${id}`).toggleClass("chip_change");
              }}
              id="c_2"
              className="chip"
            >
              Artificial Intelligence
            </div>
            <div
              onClick={(e) => {
                const { id } = e.target;
                $(`#${id}`).toggleClass("chip_change");
              }}
              id="c_3"
              className="chip"
            >
              Machine Learning
            </div>
            <div
              onClick={(e) => {
                const { id } = e.target;
                $(`#${id}`).toggleClass("chip_change");
              }}
              id="c_4"
              className="chip"
            >
              Neural Networks
            </div>
            <div
              onClick={(e) => {
                const { id } = e.target;
                $(`#${id}`).toggleClass("chip_change");
              }}
              id="c_5"
              className="chip"
            >
              Saas
            </div>
            <div
              onClick={(e) => {
                const { id } = e.target;
                $(`#${id}`).toggleClass("chip_change");
              }}
              id="c_6"
              className="chip"
            >
              Fintech
            </div>
            <div
              onClick={(e) => {
                const { id } = e.target;
                $(`#${id}`).toggleClass("chip_change");
              }}
              id="c_7"
              className="chip"
            >
              Deep-learning
            </div>
            <div
              onClick={(e) => {
                const { id } = e.target;
                $(`#${id}`).toggleClass("chip_change");
              }}
              id="c_8"
              className="chip"
            >
              Final-Services
            </div>
            <div
              onClick={(e) => {
                $(`#dialog`).show();
              }}
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
              onClick={(e) => {
                const { id } = e.target;
                $(`#${id}`).toggleClass("chip_change");
              }}
              id="c_10"
              className="chip"
            >
              AWS
            </div>
            <div
              onClick={(e) => {
                const { id } = e.target;
                $(`#${id}`).toggleClass("chip_change");
              }}
              id="c_11"
              className="chip"
            >
              React
            </div>
            <div
              onClick={(e) => {
                const { id } = e.target;
                $(`#${id}`).toggleClass("chip_change");
              }}
              id="c_12"
              className="chip"
            >
              Python
            </div>

            <div
              onClick={(e) => {
                $(`#dialog3`).show();
              }}
              id="c_13"
              className="schip"
            >
              + Add tech-stack
            </div>
          </div>
          <div className="input_label">Openings</div>
          <div className="chip_wrapper">
            <div
              onClick={(e) => {
                const { id } = e.target;
                $(`#${id}`).toggleClass("chip_change");
              }}
              id="c_14"
              className="chip"
            >
              Software Development Internship
            </div>
            <div
              onClick={(e) => {
                const { id } = e.target;
                $(`#${id}`).toggleClass("chip_change");
              }}
              id="c_15"
              className="chip"
            >
              Full-Stack Developer
            </div>
            <div
              onClick={(e) => {
                const { id } = e.target;
                $(`#${id}`).toggleClass("chip_change");
              }}
              id="c_16"
              className="chip"
            >
              Supply chain intern
            </div>

            <div
              onClick={(e) => {
                $(`#dialog2`).show();
              }}
              id="c_17"
              className="schip"
            >
              + Add Openings
            </div>
          </div>
          <div className="input_label"> Locations</div>
          <LocationSelect />
        </div>
      </div>
    );
  }
}

export default Form;

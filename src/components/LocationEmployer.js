import React from "react";
import $ from "jquery";
import Accordion from "./Accordion";

export default function LocationSelect() {
  const continentData = ["Asia", "Europe", "Australia"];
  const renderAccordions = () => {
    let z = [];
    z = continentData.map((value) => {
      return <Accordion id={value} />;
    });

    return z;
  };
  return (
    <div>
      <div className="select_country_header">
        Select Country
        <span
          className="expand"
          onClick={() => {
            $("#select_continent").toggle(400);
            var x = document.getElementById("select_continent_button");
            if (x.innerHTML == "Expand") {
              x.innerHTML = "Close";
            } else {
              x.innerHTML = "Expand";
            }
          }}
        >
          <button id="select_continent_button">Expand</button>
        </span>
      </div>
      <div id="select_continent" className="continents">
        {renderAccordions()}
      </div>
    </div>
  );
}

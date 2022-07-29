import React, { useContext } from "react";
import { FilterDispath } from "../../Context/ContextFilter";
import "./Filter.css";

export default function Filter() {
  const { dispath } = useContext(FilterDispath);
  return (
    <div className="filter_container">
      <div className="filter_btnBox">
        <button onClick={() => dispath({ type: "ALL" })} className="filter_btn">
          All
        </button>
        <button
          onClick={() => dispath({ type: "Seats" })}
          className="filter_btn"
        >
          TV Stand
        </button>
        <button
          onClick={() => dispath({ type: "TV Stand" })}
          className="filter_btn"
        >
          Coffee Table
        </button>
        <button
          onClick={() => dispath({ type: "Coffee Table" })}
          className="filter_btn"
        >
          Beds
        </button>
        <button
          onClick={() => dispath({ type: "Beds" })}
          className="filter_btn"
        >
          Seats
        </button>
      </div>
    </div>
  );
}

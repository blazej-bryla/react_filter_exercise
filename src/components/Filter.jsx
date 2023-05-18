import React from "react";
import { useDispatch } from "react-redux";
import { updateQuery } from "../redux/people/actions";

function Filter() {
  const dispatch = useDispatch();

  const handleChanges = (event) => {
    dispatch(updateQuery(event.target.value));
  };

  return (
    <div className="App-box">
      <input type="text" placeholder="Search" onChange={handleChanges} />
    </div>
  );
}

export default Filter;

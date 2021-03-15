import React from "react";

const BabyName = (props) => {
    // console.log(props);
  return (
    <button id={props.id} className={`name ${props.sex}-name`}>{props.name}</button>
  );
}

export default BabyName;
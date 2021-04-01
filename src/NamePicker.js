// import { useState } from "react";
import BabyName from "./BabyName";

const NamePicker = (props) => {
  return (
    <div className="name-picker">
      {props.namesData
        // filter names based on user search input
        .filter((nameData) =>
          nameData.name.toUpperCase().includes(props.textInput.toUpperCase())
        )
        // filter names based on selected gender filter
        .filter((nameData) => {
          if (props.filter === "b") {
            return true;
          }
          return nameData.sex === props.filter;
        })
        // populate name components
        .map((nameData, index) => {
          return (
            <BabyName
              key={index}
              id={nameData.id}
              sex={nameData.sex}
              name={nameData.name}
              onDoubleClick={props.onDoubleClick}
            />
          );
        })}
    </div>
  );
};

export default NamePicker;

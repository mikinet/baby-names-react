// import { useState } from "react";
import BabyName from "./BabyName";

const NamePicker = (props) => {
  return (
    <div className="name-picker">
      {props.namesData
        // filter names based on user search input
        .filter((nameData) =>
          nameData.name.toUpperCase().includes(props.filter.toUpperCase())
        )
        // populate names
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

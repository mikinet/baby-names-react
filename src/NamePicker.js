import React from "react";
import BabyName from "./BabyName";
const NamePicker = (props) => {
  // console.log(props)
  return (
    <div className="name-picker">
      {props.namesData
        .sort((nameDataA, nameDataB) => {
          if (nameDataA.name.toUpperCase() < nameDataB.name.toUpperCase()) {
            return -1;
          }
          return 1;
        })
        .map((babyNameData, index) => {
          return (
            <BabyName
              key={index}
              id={babyNameData.id}
              sex={babyNameData.sex}
              name={babyNameData.name}
            />
          );
        })}
    </div>
  );
};

export default NamePicker;

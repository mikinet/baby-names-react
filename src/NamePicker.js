import BabyName from "./BabyName";

const NamePicker = (props) => {
  return (
    <div className="name-picker">
      {props.namesData
        // sort baby names in ascending alphabetical order
        .sort((nameDataA, nameDataB) => {
          if (nameDataA.name.toUpperCase() < nameDataB.name.toUpperCase()) {
            return -1;
          }
          return 1;
        })
        // filter names based on user search input
        .filter((babyNameData) =>
          babyNameData.name.toUpperCase().includes(props.filter.toUpperCase())
        )
        // populate names
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

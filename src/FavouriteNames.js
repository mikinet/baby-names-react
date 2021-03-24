import BabyName from "./BabyName";

const FavouriteNames = (props) => {
  return (
    <div className="favourites">
      <span>Favourites: </span>
      {
        // populate names
        props.namesData.map((nameData, index) => {
          return (
            <BabyName
              key={index}
              id={nameData.id}
              sex={nameData.sex}
              name={nameData.name}
              onDoubleClick={props.onDoubleClick}
            />
          );
        })
      }
    </div>
  );
};
export default FavouriteNames;

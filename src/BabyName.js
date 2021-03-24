const BabyName = (props) => {
  return (
    <button
      id={props.id}
      className={`name ${props.sex}-name`}
      onDoubleClick={props.onDoubleClick}
    >
      {props.name}
    </button>
  );
};

export default BabyName;

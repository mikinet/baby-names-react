const SearchBar = (props) => {
  // IDENTIFY/INDICATE WHICH BABY NAMES FILTER IS CURRENTLY SELECTED
  const changeStyle = (id) => {
    const filters = [...document.querySelectorAll(".search-bar .name-filter")];
    filters.forEach((filter) => filter.classList.remove("active-filter"));
    document.getElementById(id).classList.add("active-filter");
  };
  return (
    <div className="search-bar">
      <input
        type={props.type}
        id="search"
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      <img
        id="b"
        className={`name-filter active-filter`}
        src="https://www.fileformat.info/info/unicode/char/1f425/frontfacing_baby_chick.png"
        alt="both genders"
        onClick={() => {
          changeStyle("b");
          props.onClick("b");
        }}
      />
      <img
        id="f"
        className={`name-filter filter-female`}
        src="https://www.fileformat.info/info/unicode/char/1f424/baby_chick.png"
        alt="female"
        onClick={() => {
          changeStyle("f");
          props.onClick("f");
        }}
      />
      <img
        id="m"
        className={`name-filter filter-male`}
        src="https://www.fileformat.info/info/unicode/char/1f423/hatching_chick.png"
        alt="male"
        onClick={() => {
          changeStyle("m");
          props.onClick("m");
        }}
      />
    </div>
  );
};
export default SearchBar;

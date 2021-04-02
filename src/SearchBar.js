const ICONS = [
  {
    id: "b",
    className: "name-filter active-filter",
    src:
      "https://www.fileformat.info/info/unicode/char/1f425/frontfacing_baby_chick.png",
    alt: "both genders",
    onClick: function () {
      changeStyle("b");
      properties.onClick("b");
    },
  },
  {
    id: "f",
    className: "name-filter filter-female",
    src: "https://www.fileformat.info/info/unicode/char/1f424/baby_chick.png",
    alt: "female",
    onClick: function () {
      changeStyle("f");
      properties.onClick("f");
    },
  },
  {
    id: "m",
    className: "name-filter filter-male",
    src:
      "https://www.fileformat.info/info/unicode/char/1f423/hatching_chick.png",
    alt: "male",
    onClick: function () {
      changeStyle("m");
      properties.onClick("m");
    },
  },
];

let properties = null;
// THE MAIN COMPONENT
const SearchBar = (props) => {
  properties = props;
  return (
    <div className="search-bar">
      <SearchBox onChange={props.onChange} placeholder={props.placeholder} />
      {ICONS.map((iconData, index) => (
        <Icon key={index} attributes={iconData} />
      ))}
    </div>
  );
};
export default SearchBar;

// SUBCOMPONENTS
export const SearchBox = (props) => {
  return (
    <input
      id="search"
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

export const Icon = ({ attributes }) => {
  return (
    <img
      id={attributes.id}
      className={attributes.className}
      src={attributes.src}
      alt={attributes.alt}
      onClick={attributes.onClick}
    />
  );
};

// HELPER FUNCTIONS

// a function to emphasise which baby name filter is currently active/selected
const changeStyle = (id) => {
  const filters = [...document.querySelectorAll(".search-bar .name-filter")];
  filters.forEach((filter) => filter.classList.remove("active-filter"));
  document.getElementById(id).classList.add("active-filter");
};
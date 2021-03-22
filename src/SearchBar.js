const SearchBar = (props) => {
  return <input type={props.type} id="search" onChange={props.onChange} placeholder={props.placeholder} />;
}
export default SearchBar;
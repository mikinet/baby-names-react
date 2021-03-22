import { useState } from "react";
import "./App.css";
import NamePicker from "./NamePicker";
import SearchBar from "./SearchBar";
import babyNamesData from "./babyNamesData.json";
function App() {
  const [searchInput, setSearchInput] = useState("");
  const handleNameSearch = (event) => {
    const input = event.target.value;
    setSearchInput(input);
  }
  return (
    <div class="App">
      <SearchBar
        type="text"
        onChange={handleNameSearch}
        placeholder="Search here..."
      />
      <NamePicker namesData={babyNamesData} filter={searchInput} />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import babyNamesData from "./babyNamesData.json";
import NamePicker from "./NamePicker";
import SearchBar from "./SearchBar";
import Favourites from "./FavouriteNames";

function App() {
  // the name search function
  const [searchInput, setSearchInput] = useState("");
  const handleNameSearch = (event) => {
    const input = event.target.value;
    setSearchInput(input);
  };
  // add names to or remove names from a favourites list
  const [favouriteNames, setFavouriteNames] = useState([]);
  const [availableNames, setAvailableNames] = useState(sort([...babyNamesData]));
  const handleAddRemoveFavourites = (event) => {
    const babyName = getNameData(event.target);
    const parentElement = event.target.parentNode.className;
    if (parentElement === "favourites") {
      setFavouriteNames(removeName(babyName, favouriteNames));
      setAvailableNames(addName(babyName, availableNames));
    } else {
      setFavouriteNames(addName(babyName, favouriteNames));
      setAvailableNames(removeName(babyName, availableNames));
    }
  };

  return (
    <div class="App">
      <SearchBar
        type="text"
        onChange={handleNameSearch}
        placeholder="Search for a nmae..."
      />
      <Favourites
        namesData={favouriteNames}
        onDoubleClick={handleAddRemoveFavourites}
      />
      <NamePicker
        namesData={availableNames}
        filter={searchInput}
        onDoubleClick={handleAddRemoveFavourites}
      />
    </div>
  );
}

export default App;

function addName(name, namesList) {
  namesList = namesList.concat(name);
  return sort(namesList);
}

function removeName(favouriteName, namesList) {
  for (let i = 0; i < namesList.length; i++) {
    const babyName = namesList[i];
    if (
      babyName.id === favouriteName.id &&
      babyName.name === favouriteName.name &&
      babyName.sex === favouriteName.sex
    ) {
      namesList.splice(i, 1);
      return sort(namesList);
    }
  }
}

// extract baby name data given a node (html element)
function getNameData(node) {
  // get the index value of the sex identifier ("f" or "m") from className
  const i = node.className.indexOf(" ") + 1;
  return {
    id: parseInt(node.id),
    name: node.textContent,
    sex: node.className.substring(i, i + 1),  // returns "f" or "m"
  };
}

// sort baby names in ascending alphabetical order
function sort(namesList) {
  if (namesList.length > 1) {
    namesList.sort((nameDataA, nameDataB) => {
      if (nameDataA.name.toUpperCase() < nameDataB.name.toUpperCase()) {
        return -1;
      }
      return 1;
    });
  }
  return namesList;
}

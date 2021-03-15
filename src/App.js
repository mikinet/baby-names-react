import "./App.css";
import NamePicker from "./NamePicker";
import babyNamesData from "./babyNamesData.json";
function App() {
  return <NamePicker namesData={babyNamesData} />;
}

export default App;

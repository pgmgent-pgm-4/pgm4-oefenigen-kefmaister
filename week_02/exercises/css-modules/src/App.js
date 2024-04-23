import "./App.css";
import ImageAvatars from "./components/ImageAvatars";
import MemberCard from "./components/MemberCard";
import members from "./data/persona";

function App() {
  return (
    <div className="App">
      <MemberCard member={members} />
    </div>
  );
}

export default App;

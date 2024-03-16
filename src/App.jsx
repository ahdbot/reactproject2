import "./App.css";

function App() {
 
  let person = "  Ahmad Bajaber ";

  const ChangeName = () => {
    console.log("hiiiiiii");
    person = "  ElRAYEK   ";
  };

  return (
    <div className="App">
      <h2>my name is {person}</h2>
      <button onClick={ChangeName}>Change Name</button>

      {/* <button> my name is ahmad</button> */}
    </div>
  );
}

export default App;

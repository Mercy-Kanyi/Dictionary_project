import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Dictionary from "./Dictionary";
import dictionary from "./Images/dictionary.png"

function App() {
  return (
    <div className="App m-4 p-3">
      <div className="container">
        <header className="App-header">
          <img src={dictionary} className="dictionary-image img-fluid w-25" alt="dictionary"/>
        </header>
        <Dictionary defaultWordSearch="code"/>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://github.com/Mercy-Kanyi/Dictionary_project"
              target="_blank"
              rel="noreferrer"
            >
              Mercy Kanyi
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;

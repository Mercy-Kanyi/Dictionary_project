import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <Dictionary />
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

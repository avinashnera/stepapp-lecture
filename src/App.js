import logo from './logo.svg';
import './App.css';
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from "@fortawesome/fontawesome-svg-core";
// // import { faUser } from "@fortawesome/free-regular-svg-icons";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// // fontawesome.config = {
// //   familyPrefix: "far"
// // };
// library.add(faUser);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div><FontAwesomeIcon icon="user" /></div>
      </header>
    </div>
  );
}

export default App;

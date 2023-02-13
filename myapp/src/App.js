import "./App.css";
import qr from "./image-qr-code.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="qrdiv">
          <img src={qr} alt="QR code to frontendmentor.io"></img>
          <h1>
            Improve your front-end <br></br>skills by building projects
          </h1>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;

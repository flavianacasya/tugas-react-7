import "./App.css";
import { FaCamera } from 'react-icons/fa';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">NAN<span className="cam">Cam</span></h1>
      </header>
      <main className="main-content">
        <h2 className="welcome">HELLO WELCOME TO</h2>
        <h2 className="nancam">NANCAM</h2>

        <div className="image-section">
          <div className="image-left">
            <img src="/image1.png" alt="Left Top" /> {}
            <img src="/image2.png" alt="Left Bottom" /> {}
          </div>
          <div className="image-right">
            <img src="/image3.png" alt="Right Top" /> {}
            <img src="/image4.png" alt="Right Bottom" /> {}
          </div>
        </div>

        <button className="camera-button">
      <FaCamera /> CAMERA
    </button>
      </main>
    </div>
  );
}

export default App;

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
            <img src="/image1.png" alt="Left Top" /> {/* Ganti di sini */}
            <img src="/image2.png" alt="Left Bottom" /> {/* Ganti di sini */}
          </div>
          <div className="image-right">
            <img src="/image3.png" alt="Right Top" /> {/* Ganti di sini */}
            <img src="/image4.png" alt="Right Bottom" /> {/* Ganti di sini */}
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
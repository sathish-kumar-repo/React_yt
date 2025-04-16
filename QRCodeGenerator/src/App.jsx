import { useState } from "react";
import "./App.css";

function App() {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState("http://localhost:5173/");
  const [qrSize, setQrSize] = useState(150);

  async function generateQR() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(
        qrData
      )}`; // there is any sensitive data(symbols,..) its automatically encoded

      setImg(url);
    } catch (error) {
      console.log("Error generating QR Code", error);
    } finally {
      setLoading(false);
    }
  }

  function downloadQR() {
    fetch(img)
      // bolb na file type mathri (binary format data)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `QrCode.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.log("Error Downloading QR Code", error);
      });
  }

  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>

      {loading && <p>Please wait...</p>}

      {img && <img src={img} alt="QR Code" className="qr-code-img" />}

      <div>
        <label htmlFor="dataInput" className="input-label">
          Data for QR Code
        </label>
        <input
          type="text"
          id="dataInput"
          placeholder="Enter data for QR code"
          value={qrData}
          onChange={(e) => setQrData(e.target.value)}
        />

        <label htmlFor="sizeInput" className="input-label">
          Image size(e.g., 150)
        </label>
        <input
          type="text"
          id="sizeInput"
          placeholder="Enter image sizeInput"
          value={qrSize}
          onChange={(e) => setQrSize(e.target.value)}
        />

        <button
          className="generate-btn"
          onClick={generateQR}
          disabled={loading}
        >
          Generate QR Code
        </button>

        <button className="download-btn" onClick={downloadQR}>
          Download QR Code
        </button>
      </div>

      <p className="footer">
        Designed by <span>Sathish Kumar</span>
      </p>
    </div>
  );
}

export default App;

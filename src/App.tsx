import { createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Device } from "@capacitor/device";

function App() {
  const [count, setCount] = createSignal(0);
  const [deviceInfo, setDeviceInfo] = createSignal<any>(null);
  const [error, setError] = createSignal<any>(null);

  async function checkDeviceInfo() {
    setError(null);
    setDeviceInfo(null);
    console.log("Checking device info");
    try {
      const info = await Device.getInfo();
      console.log("Device info", info);
      setDeviceInfo(info);
    } catch (e) {
      console.error(e);
      setError(e);
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <button onClick={() => checkDeviceInfo()}>Check Device Info</button>
      </div>
      <p class="read-the-docs">
        {error() && JSON.stringify(error(), null, 2)}
        {deviceInfo() && JSON.stringify(deviceInfo(), null, 2)}
      </p>
    </>
  );
}

export default App;

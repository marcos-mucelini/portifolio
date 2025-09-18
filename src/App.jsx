import Menu from "./components/Menu";

import "./App.css";
import Principal from "./components/Principal";
import SobreMim from "./components/Sobre";

function App() {
  return (
    <>
      <Menu />
      <main>
        <Principal />
        <SobreMim />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;

import MenuKontak from "./components/MenuKontak";
import MenuProduct from "./components/MenuProduct";
import MenuTentangKami from "./components/MenuTentangKami";
import MenuUtama from "./components/MenuUtama";

const Header = () => {
  return (
    <div>
      <h1>Ini Halaman Untuk Header</h1>
    </div>
  );
}

const Footer = () => {  
  return (
    <div>
      <h1>Ini Halaman Untuk Footer</h1>
    </div>
  );
}

function App() {
  return (
    <div >
    <h1>Tugas 1 React JS</h1>
    <Header />
    <MenuUtama />
    <MenuProduct />
    <MenuKontak />
    <MenuTentangKami />
    <Footer />
    </div>
  );
}

export default App;

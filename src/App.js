import Footer from "./components/Footer";
import Header from "./components/Header";
import MenuKontak from "./components/MenuKontak";
import MenuMakanan from "./components/MenuMakanan";
import MenuUtama from "./components/MenuUtama";
import TentangKami from "./components/TentangKami";


function App() {
  return (
    <div >
    <Header />
    <MenuUtama />
    <MenuMakanan />
    <TentangKami />
    <MenuKontak />
    <Footer list="3 terbaik" />
    </div>
  );
}

export default App;

import './App.css';
import Banner from './components/banner/Banner';
import Cards from './components/card-slider/Cards';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Cards />
    </div>
  );
}

export default App;

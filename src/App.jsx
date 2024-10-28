import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Items from './pages/Items';
import Trinkets from './pages/Trinkets';
import Pickups from './pages/Pickups';
import Cards from './pages/Cards';
import Enemies from './pages/Enemies';
import Bosses from './pages/Bosses';
import Rooms from './pages/Rooms';
import Transformations from './pages/Transformations';
import Extra from './pages/Extra';
import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Header className="container"/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bosses" element={<Bosses />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/enemies" element={<Enemies />} />
              <Route path="/extra" element={<Extra />} />
              <Route path="/items" element={<Items />} />
              <Route path="/pickups" element={<Pickups />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/transformations" element={<Transformations />} />
              <Route path="/trinkets" element={<Trinkets />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;

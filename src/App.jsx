
import './App.css';
import data from './data'
import CardList from './components/CardList'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CityDetails from './components/CityDetails';
function App() {
  return (
    <>      
    <h1 style={{ textAlign: 'center' }}>Start Your Holiday here.....</h1>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<CardList data={data} />}></Route>
          <Route path='/city-details/:ID/*' element={<CityDetails />}></Route>
          </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
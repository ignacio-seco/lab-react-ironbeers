import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import { useEffect, useState } from 'react';
import ListBeer from './components/ListBeer/ListBeer';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';
import axios from 'axios';
import NavBar from "./components/NavBar/NavBar"
import BeerDetails from './components/BeerDetails/BeerDetails';

function App() {
  const apiData = "https://ih-beers-api2.herokuapp.com/beers"
  const [show, setShow] = useState(true)
  const [beers,setBeers] = useState([])
  useEffect(()=>{
    console.log("useEffect - Initial render (Mounting)");
    axios.get(apiData).then((response) => {
      setBeers(response.data);
    });
  }, []);
  




  return (
    <div className="App">
    {show && <NavBar setShow={setShow}/> }

    <Routes>
    <Route path="/" element={<HomePage setShow={setShow} />}/>
    <Route path="/beers" element={<ListBeer  beers={beers} />}/>
    <Route path="/beers/:_id" element={<BeerDetails  beers={beers} />}/>
    <Route path="/random-beer" element={<RandomBeer  beers={beers} />}/>
    <Route path="/new-beer" element={<NewBeer setShow={setShow} apiData={apiData}/>}/>

    </Routes>

    </div>
  );
}

export default App;

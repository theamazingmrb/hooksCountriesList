import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryCard from './components/CountryCard';

function App() {
  const [countries, setCountries] = useState([]);
  const [ searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(data => {
        setCountries(data)
      })
  }, [])

  const onChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSeachTerm = (country) => {
    return country.name.toLowerCase().includes(searchInput.toLowerCase())
  }


  return (
    <div>
      <h1 className="text-6xl text-center">Countries List</h1>
     <div className="flex items-center justify-center">
     <input 
          className="border-2 p-3 w-1/2"
          type="text"
          placeholder="Search for a country"
          onChange={onChangeHandler}
        />
     </div>

      <div className="flex flex-wrap justify-center">
 
        {countries.filter(handleSeachTerm).map((country) => (
          <CountryCard country={country} key={country.alpha3Code} />
        ))}
      </div>
    </div>
  );
}

export default App;

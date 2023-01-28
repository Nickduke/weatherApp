import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Cities from './components/Cities';
import WeatherDashboard from './components/WeatherDashboard';

const url = `https://api.openweathermap.org/data/2.5/weather?q=ottawa&appid=6507ec9c905f52f3550a3737b29ef566`;

const fetchData = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

function App() {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className='wrapper'>
      <article className='app-container'>
        <Cities />
        <WeatherDashboard />
      </article>
    </main>
  );
}

export default App;

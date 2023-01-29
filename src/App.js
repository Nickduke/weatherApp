import { useEffect, useState } from 'react';
import './App.css';

const url = `https://api.openweathermap.org/data/2.5/forecast?q=`;
const apiKey = `6507ec9c905f52f3550a3737b29ef566`;

function App() {
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    try {
      const cities = await Promise.all([
        fetch(`${url}ottawa&appid=${apiKey}`).then((res) => res.json()),
        fetch(`${url}moscow&appid=${apiKey}`).then((res) => res.json()),
        fetch(`${url}tokyo&appid=${apiKey}`).then((res) => res.json()),
      ]);
      setCities(cities);
      console.log(cities);
    } catch (error) {
      console.log(`There has been a error ${error}`);
    }
  };

  // const cityTemp = cities[value].list[0].main.temp;
  // const tempIcon = cities[value].list[0].weather[0].main;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <main className='wrapper'>
        <article className='app-container'>
          <nav className='nav'>
            <ul className='cities-list'>
              {cities.map((city, index) => {
                const cityName = city.city.name;
                return (
                  <li className='city' key={index}>
                    <button
                      onClick={() => setValue(index)}
                      className={`city-btn ${index === value && 'active-btn'}`}
                    >
                      {cityName}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
          <section className='weather-container'>
            <div className='current-weather-container'>
              <h3 className='today'>today</h3>
              <div className='icon-temp-container'>
                <span>{cities[value].list[0].weather[0].main}</span>
                <div className='temp-container'>
                  <p className='temp'>{cities[value].list[0].main.temp}</p>
                  <p>{cities[value].list[0].weather[0].main}</p>
                </div>
              </div>
            </div>
            <div className='weekly-forecast-container'>article</div>
          </section>
        </article>
      </main>
    </>
  );
}

export default App;

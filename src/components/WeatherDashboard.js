const WeatherDashboard = () => {
  return (
    <section className='weather-container'>
      <div className='current-weather-container'>
        <h3 className='today'>today</h3>
        <div className='icon-temp-container'>
          <span>icon</span>
          <div className='temp-container'>
            <p className='temp'>19deg</p>
            <p>Clouds</p>
          </div>
        </div>
      </div>
      <div className='weekly-forecast-container'>article</div>
    </section>
  );
};
export default WeatherDashboard;

import React, {useEffect, useState } from 'react'

const WeatherCard = () => {
  const [searchCity, setSearchcity] = useState(false);
  // const [temp ,setTemp] = useState();
  // const [desc, setDesc] = useState();
  // const [humidity, setHumidity] = useState();
  // const [cityName, setCityName] = useState("");
  // const [country, setCountry] = useState("");
  // const [weatherIcon, setWeatherIcon] = useState("");

  const [weatherData, setWeatherData] = useState({
    temp:"",
    desc:"",
    humidity:"",
    cityName:"",
    country:"",
    weatherIcon:""
  })
  const city = document.getElementsByClassName("cityInput");
  
  const handleSearchCity = ()=>{
    setSearchcity(true);
    useWeatherApi();
  };

  const useWeatherApi = async() =>{
    const api_key = "b33ff06ccbc1eaafca719cd0057b78f1";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city[0].value}&appid=${api_key}`;
   
    const data = await fetch (url);
    const weather_data = await data.json();

    console.log(weather_data);
    const tempDeg = (weather_data.main.temp-273.15).toFixed(2);
     
      setWeatherData({
        temp:tempDeg,
        desc:weather_data.weather[0].description,
        humidity:weather_data.main.humidity,
        cityName: weather_data.name,
        country:weather_data.sys.country,
        weatherIcon:weather_data.weather[0].icon,
      })
  };

  useEffect(()=>{
    
  },[city]);
  

  return (

    <div className='w-full h-screen bg-[#a9c7c4] flex justify-center'>
      <div>
      <h1 className='text-gray-700 shadow-md text-4xl py-12 font-semibold text-center'>Weather App</h1>
      <form onSubmit={(e)=>e.preventDefault()} className='mt-4 mx-2 p-8 rounded-md bg-zinc-500'>
            <h2 className='text-left font-semibold  text-gray-400'>Enter City:</h2>
            <input  type='text' className=' cityInput border-2 mt-4 outline-none rounded-sm bg-zinc-600 text-white text-lg' />
            <button onClick={handleSearchCity} className='bg-green-500 px-4  p-1 font-bold rounded'>Check</button>
        </form>

    {   
    searchCity &&
      <div className='bg-zinc-500 rounded-md text-white mt-8 p-8 '>
          <p className='font-semibold'>{weatherData.cityName+" "+weatherData.country}</p>
          <img src={`http://openweathermap.org/img/w/${weatherData.weatherIcon}.png`}
              className='w-24 h-24  left-0 right-0 mx-auto ' />
          <p className='text-center text-xl  '>{weatherData.desc}</p>

          <p className=' text-4xl text-center p-4 '>{weatherData.temp}<sup><sup>o</sup>c</sup> </p>
          <p className='text-center text-xl '>Humidity:- {weatherData.humidity}%</p>
       </div>
       }
  
      </div>
    </div>
  )
}

export default WeatherCard
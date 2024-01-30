import React, {useEffect, useState } from 'react'

const WeatherCard = () => {
  const [temp ,setTemp] = useState();
  const [desc, setDesc] = useState();
  const [humidity, setHumidity] = useState();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");

  const city = document.getElementsByClassName("cityInput");
  
  const handleSearchCity = ()=>{
    useWeatherApi();
  };
  const useWeatherApi = async() =>{
    const api_key = "b33ff06ccbc1eaafca719cd0057b78f1";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city[0].value}&appid=${api_key}`;
   
    const data = await fetch (url);
    const weather_data = await data.json();

    console.log(weather_data);
     const tempDeg = (weather_data.main.temp-273.15).toFixed(2);
     
     setTemp(tempDeg);
     setDesc(weather_data.weather[0].description);
     const humidity = (weather_data.main.humidity);
     setHumidity(humidity);

     setCityName(weather_data.name);
     setCountry(weather_data.sys.country);

 //    const wi = (weather_data.weather[0].icon)+".png";
      const icon = (weather_data.weather[0].icon);
      setWeatherIcon(icon);
  };

  useEffect(()=>{
    
  },[city]);
  

  return (

    <div className='w-full h-screen bg-blue-500 flex justify-center'>
      <div>
      <h1 className='text-blue-800 text-4xl py-12 font-semibold text-center'>Weather App</h1>
      <form onSubmit={(e)=>e.preventDefault()} className='mt-4 mx-2 p-8 rounded-md bg-zinc-500'>
            <h2 className='text-left font-semibold text-gray-400'>Enter City:</h2>
            <input  type='text'  className=' cityInput border-2 mt-4 outline-none rounded-sm bg-zinc-600 text-white text-lg' />
            <button onClick={handleSearchCity} className='bg-green-500 px-4  p-1 font-bold rounded'>Check</button>
        </form>
      <div className='bg-yellow-400 mt-8 p-8 '>
          <p className='font-semibold'>{cityName+" "+country}</p>
          <img src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
              className='w-24 h-24  left-0 right-0 mx-auto '  />
          <p className='text-center text-xl  '>{desc}</p>

          <p className=' text-4xl text-center p-4 '>{temp}<sup>/o</sup> </p>
          <p className='text-center text-xl '>Humidity:- {humidity}%</p>
       </div>
  
      </div>
    </div>
  )
}

export default WeatherCard
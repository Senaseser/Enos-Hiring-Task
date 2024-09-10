import { useState } from 'react';

import image1 from "../assets/image.png";
import image2 from "../assets/image2.png";
import search from "../assets/search.svg";
import Loading from './Loading';
import WeatherTable from './WeatherComponents/WeatherTable';
import WeatherCard from './WeatherComponents/WeatherCard';
import { DayType } from '../types';

const API_KEY = "e55d8a4bb4a7448bbe2d2fa711f5357b";
const BASE_URL = "https://api.weatherbit.io/v2.0/forecast/daily";

const HomePage = () => {
  const [city, setCity] = useState<string>(''); 
  const [selectedCity, setSelectedCity] = useState<string>(''); 
  const [data, setData] = useState<DayType[]>([]); 
  const [selectedDay, setSelectedDay] = useState<DayType | null | undefined>(undefined);
  const [loading,setLoading]= useState<boolean>(false);

  const handleSearch = () => {
    if (city.trim()) { 
      setLoading(true);
      fetchData(city).then((data) => {
        setLoading(false);
        if (data && data.length > 0) { 
          setData(data);  
          setSelectedDay(data[0]); 
          setSelectedCity(city);
        } else {
          setData([]);
          setSelectedDay(null);  
        }
      }).catch(error => {
        setLoading(false);
        setData([]); 
        setSelectedDay(null); 
      });
    } else {
      setData([]);
      setSelectedDay(null); 
    }
  };
  

  const handleDayClick = (day: DayType) => {
    setSelectedDay(day);
  };

  const fetchData = async (city: string) => {
    const cachedData = localStorage.getItem(city);
  
    if (cachedData) {
      return JSON.parse(cachedData);
    }
  
    try {
      const response = await fetch(`${BASE_URL}?city=${city}&key=${API_KEY}&days=16&lang=en`); 
      
      if (!response.ok) {
        throw new Error("Veri alınamadı");
      }
  
      const data = await response.json();
  
      if (data && data.data && data.data.length > 0) {
        const allData: DayType[] = data.data; 
  
        const today = new Date("2024-09-15");
        const startDayWeek = new Date(today);
        const dayOfWeek = today.getDay();
        const toMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1; 
        startDayWeek.setDate(today.getDate() - toMonday);
  
        const endDayWeek = new Date(startDayWeek); 
        endDayWeek.setDate(startDayWeek.getDate() + 7);
  

        const weeklyData = allData.filter((data: DayType) => {
          const date = new Date(data.datetime); 
          return date >= startDayWeek && date < endDayWeek;
        });
  
        if (weeklyData.length > 0) {
          localStorage.setItem(city, JSON.stringify(weeklyData)); 
          return weeklyData;
        } else {
          return [];
        }
      } else {
        return [];
      }
    } catch (error) {
      return [];
    }
  };
  
  return (
    <div className='home'>
      <div className='home-table'>
        {loading ? <Loading/> :  selectedDay ? (
          <WeatherTable data={data} onDayClick={handleDayClick} city={selectedCity} />
        ) : selectedDay === undefined ? (
          <div className='img-container'>
          <img className="home-img" src={image1} alt="first-image" /></div>
        ) : (
         <div className='img-container'> <img className="home-img" src={image2} alt="doesnt-exist" /></div>
        )} 
      
      </div>
   
      <div className='home-search'>
        <div className='input-container'>
          <input
            className='input'
            placeholder='Search a City'
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()} 
          /> 
          <button className='search-button' onClick={handleSearch}>
            <img className='search-icon' src={search} alt="search" />
          </button>
        </div>
          {selectedDay ? (
            <div className='search-table'>
            <WeatherCard day={selectedDay} city={selectedCity} /></div>
          ) : selectedDay === undefined ? (
            <div className='search-description'>
            <p className='description'>
              <span className='description-title'>Select a City</span>
              Search and select a city to see results. Try typing the first letters of the city you want.
            </p></div>
          ) : (
            <div className='search-description'>
            <p className='description'>
              <span className='description-title'>Does not Exist</span>
              Type a valid city name to get weekly forecast data.
            </p>
            </div>
          )}
        </div>
        </div>
  );
};

export default HomePage;

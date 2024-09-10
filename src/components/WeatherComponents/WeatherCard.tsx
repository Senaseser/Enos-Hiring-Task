import { DayType } from "../../types/DayType"

interface WeatherCardProps {
day:DayType,
city:string
}


const WeatherCard: React.FC<WeatherCardProps> = ({ day,city }) => {
  console.log(day)
  return (
    <div className="weather-card">
    <h2 >{day.temp} °C</h2>
    <h3>{city.charAt(0).toUpperCase() + city.slice(1)}</h3>
    <h6>{new Date(day.valid_date).toLocaleString('en-US',{
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}</h6>
  
    <p><img className='card-image'
  src={`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`} 
  alt={day.weather.description} 
/>{day.weather.description}</p>
  </div>
  )
}

export default WeatherCard
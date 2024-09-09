import { DayType } from "../../types";


interface WeatherTableProps {
  data: DayType[]; 
  onDayClick: (day: any) => void;
  city:string
}

const WeatherTable: React.FC<WeatherTableProps> = ({ data, onDayClick, city }) => {
  return (
<div>
    <div className='table-title'>Weather Forecast for {city.charAt(0).toUpperCase() + city.slice(1)}</div>
    <table>
      <thead >
        <tr >
          <th >Days</th>
          <th >Dates</th>
          <th >Lowest Temp.</th>
          <th >Highest Temp.</th>
        </tr>
      </thead>
      <tbody>
        {data.map((day, index) => (
          <tr key={index} onClick={() => onDayClick(day)}>
                     <td>{new Date(day.valid_date).toLocaleDateString('en-US', { weekday: 'long' })}</td>
            <td>{new Date(day.valid_date).toLocaleString('en-US',{
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}</td>
            <td>{day.min_temp} °C </td>
            <td>{day.max_temp} °C </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default WeatherTable
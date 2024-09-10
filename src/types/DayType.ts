export interface DayType {
    datetime:number,
    valid_date:number,
    temp:number,
    max_temp:number,
    min_temp:number,
    weather:{
      description:string,
      icon:string,
    }
    wind_spd:number
}


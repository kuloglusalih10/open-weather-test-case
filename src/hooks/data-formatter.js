import moment from 'moment';
import { formatDate } from './day';

function letterUpper(text) {

    return text.charAt(0).toUpperCase() + text.slice(1);
}

function getHour (date) {

    const dateFormat = new Date(date);
    return dateFormat.getHours();
}

export const formatter = (data) => {

    

    let days = {};
    let dayCount = 0;

    data.list.map((item, index)=>{

        
        

        if (!days[dayCount]) {

            days[dayCount] = {}; 
        }

        if(days[dayCount].tab === undefined) {

            days[dayCount].tab = {};

        }

        if(getHour(item.dt_txt) == 12 ){
            
            days[dayCount].tab.day = Math.round(item.main.temp);
        }

        if(getHour(item.dt_txt) == 21 ){
            
            days[dayCount].tab.night = Math.round(item.main.temp);
        }

        if(getHour(item.dt_txt) == 12 ){
            
            days[dayCount].tab.day_icon = item.weather[0].id.toString();
        }

        if(getHour(item.dt_txt) == 21 ){
            
            days[dayCount].tab.night_icon = item.weather[0].id.toString();
        }

        days[dayCount].tab.name = item.dt_txt;

        if(days[dayCount].temps === undefined) {

            days[dayCount].temps = [];

        }

        days[dayCount].temps.push(item.main.temp);

        if(days[dayCount].winds === undefined) {

            days[dayCount].winds = [];

        }

        days[dayCount].winds.push(item.wind.speed);

        if(days[dayCount].humidities === undefined) {

            days[dayCount].humidities = [];

        }

        days[dayCount].humidities.push(item.main.humidity);


        if(days[dayCount].moments === undefined) {

            days[dayCount].moments = [];

        }

        let time = {
            'name' : data.city.name,
            'temp' : Math.round(item.main.temp),
            'main' : item.weather[0].main,
            'description'  : letterUpper(item.weather[0].description),
            'icon' : item.weather[0].id.toString(),
            'wind' : item.wind.speed,
            'humidity' : item.main.humidity,
            'date' : item.dt_txt,
            'when' : item.sys.pod
        }


        days[dayCount].moments.push(time);


        if(days[dayCount].dates === undefined) {

            days[dayCount].dates = [];

        }

        days[dayCount].dates.push((moment.utc(item.dt_txt, 'YYYY-MM-DD HH:mm:ss').toISOString()));
       
        if(getHour(item.dt_txt) == 21) {
            dayCount += 1;
        }


    })

    console.log(days);


    let res = {

       
        'current' : {
            'name' : data.city.name,
            'temp' : Math.round(data.list[0].main.temp),
            'main' : data.list[0].weather[0].main,
            'description'  : letterUpper(data.list[0].weather[0].description),
            'icon' : data.list[0].weather[0].id.toString(),
            'wind' : data.list[0].wind.speed,
            'humidity' : data.list[0].main.humidity,
            'date' : data.list[0].dt_txt,
            'when' : data.list[0].sys.pod
        },

        'days' : days
        
    }

    return res

}
import dayjs from "dayjs";
import tr from 'dayjs/locale/tr'
export function formatDate(dateString) {

    const date = dayjs(dateString).locale(tr);
    const formattedDate = date.format('dddd HH:mm');
    return formattedDate;
    
  }
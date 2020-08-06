import { TIME } from './Time'

const light = {
   primary: '#5391EF',
   secondary: 'rgba(255, 255, 255, 0.5)',
   tertiary: 'rgba(255, 255, 255, 0.25)',
   text: '#3F3F3F',
   home: {
      circle: 'rgba(0, 0, 0, 0.03)',
      greeting: 'rgba(255, 255, 255, 0.5)',
      settings: 'rgba(255, 255, 255, 0.5)',
   },
}
const dark = {
   primary: '#272B58',
   secondary: 'rgba(255, 255, 255, 0.5)',
   tertiary: 'rgba(255, 255, 255, 0.25)',
   text: '#333333',
   home: {
      circle: '#22264d',
      greeting: '#add8e6',
      settings: '#7C81B4',
   },
}

export default {
   inactiveGray: '#C3C8D4',
   textGray: '#8084A4',
   backgroundGray: '#272B580D',
   red: '#ff8989',

   themed: (TIME === "NIGHT" || TIME === "EVENING") ? dark : light,
}
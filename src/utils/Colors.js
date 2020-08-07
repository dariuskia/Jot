import { TIME } from './Time'

const dark = {
   primary: '#272B58',
   lighter: 'rgba(255, 255, 255, 0.5)',
   secondary: '#4F5ADE',
   text: '#333333',
   home: {
      circle: '#22264d',
      greeting: '#add8e6',
      settings: '#7C81B4',
   },
}
const light = {
   primary: '#5391EF',
   lighter: 'rgba(255, 255, 255, 0.5)',
   secondary: '#30CEF0',
   text: '#3F3F3F',
   home: {
      circle: 'rgba(0, 0, 0, 0.03)',
      greeting: 'rgba(255, 255, 255, 0.5)',
      settings: 'rgba(255, 255, 255, 0.5)',
   },
}

export default {
   inactiveGray: '#C3C8D4',
   textGray: '#8084A4',
   backgroundGray: '#272B580D',
   red: '#ff8989',

   themed: (TIME === "NIGHT" || TIME === "EVENING") ? dark : light,

   months: {
      jan: '#92278f',
      feb: '#ec008c',
      mar: '#ed145b',
      apr: '#ed1c24',
      may: '#f7941e',
      jun: '#fff200',
      jul: '#8cc63f',
      aug: '#00a651',
      sep: '#00a99d',
      oct: '#00aeef',
      nov: '#0072bc',
      dec: '#2e3192',
   },
}
import TIME from './Time'

const dark = {
   primary: '#272B58',
   secondary: 'rgba(0, 0, 0, 0.5)',
   tertiary: 'rgba(0, 0, 0, 0.25)',
}
const light = {
   primary: '#5391EF',
   secondary: 'rgba(255, 255, 255, 0.5)',
   tertiary: 'rgba(255, 255, 255, 0.25)',
}

export default {
   inactiveGray: '#C3C8D4',
   backgroundGray: '#272B580D',
   red: '#ff8989',

   themed: TIME == "NIGHT" ? dark : light,
}
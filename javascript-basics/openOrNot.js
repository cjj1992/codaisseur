const currentDay = 'wednesday'
const currentTime = 20
const christmasToday = false

const dayOff = 'monday'
const openingTime = 18
const closingTime = 23

const opentoday = currentDay !== dayOff  && christmasToday == false
const open = opentoday && currentTime < 23 && currentTime >= 18


console.log(`Restaurant open? ${open}`)
// console.log(`Restaurant closed? ${ /* your boolean expression here */ }`)

// const d = new Date();
// console.log(d.toDateString()) 
// console.log(d.toString())
// console.log(d.toISOString())
// console.log(d.getDay())
// console.log(d.getTime())

// time counter

const date1 = new Date();
const date2 = new Date("2028-07-14")
const date = date2-date1
console.log(date)
const day = Math.floor(date/(1000*60*60*24))
const hour = Math.floor((date/(1000*60*60))%24)
console.log(day)
console.log(hour)
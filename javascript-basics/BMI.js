//Dit is een aanpassing
// const age = 31              // age
// const gender = 'm'          // 'm' or 'f'
// const heightInM = 1.98      // height in m
// const weightInKg = 88       // weight in kg
// const dailyExercise = true  // true or false
// const heightICM = heightInM * 100
// const genderModifer = gender === 'm' ? 5 : - 161

//BMR = 10 * weight(kg) + 6.25 * height(cm) - 5 * age(y) + 5 calories (man) 
//BMR = 10 * weight(kg) + 6.25 * height(cm) - 5 * age(y) - 161 calories (woman)
// console.logging the values so we can see some output

const bmi = weightInKg / (heightInM * heightInM)
const ideal_weight = 22.5 * (heightInM * heightInM)
const bmr = 10 * weightInKg + 6.25 * heightICM - 5 * age + genderModifer

console.log(bmi)
console.log(ideal_weight)
console.log (`BMR is:${bmr}`)

console.log(`
age: ${age}
gender: ${gender}
height: ${heightInM}
weight: ${weightInKg}
Do you exercise daily?: ${dailyExercise}
`)


// use user input to define the farenheitTemp
let farenheitTemp = prompt('Enter Farenheit Temperature');
// create a function that defines the conversion equation.
const celsiusTemp = (farenheitTemp - 32) * (5/9);
// have the user input run through the equation

// have a function take the farenheitTemp and describe that number.
// if less than 32 - very cold, if less than 64 - cold, 
// if less than 86 - warm, if less than 100 - hot, if greater than 100 - very hot 


let message = ``;

if (farenheitTemp <= 32) {
  message = `Very Cold!`
} else if(farenheitTemp <= 64){
  message = `Cold!`
} else if(farenheitTemp <= 86){
  message = `Warm!`
} else if(farenheitTemp <=100){
  message = `Hot!`
} else if(farenheitTemp >=100){
  message = `Very Hot!`
}

// you need to have the alert last so that it knows what functions have been created and defined.
alert(`Your Temperature in Celcius: ` + celsiusTemp + ` ` + message)



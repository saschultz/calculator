var add = function(number1, number2){
	return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number"));

//This function subtracts two values
var subtract = function(number1, number2){
	return number1 - number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number"));

//This function multiplies two values
var multiply = function(number1, number2){
	return number1 * number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number"));

//This function divides two values
var divide = function(number1, number2){
	return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number"));

var result = subtract(number1, number2);
alert(result);

//This function converts celcius to fahrenheit
// var conversion = function(celcius) {
// 	return ((celcius *=9) /5) +32;
// };
//
// var celcius = parseInt(prompt("Enter the degree in Celcius to convert to Fahrenheit:"));
//
// var result = conversion(celcius);
// alert(result);
